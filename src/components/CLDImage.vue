<template>
  <picture
    v-bind:class="{
    'cld-image': true,
    'cld-fill': this.responsive === 'fill',
    'cld-fill-width': this.responsive === 'width' || this.responsive === '',
    'cld-fill-height': this.responsive === 'height'
  }"
  >
    <img v-if="ready" v-bind="imageAttrs">
    <slot/>
  </picture>
</template>

<script>
import {
  Cloudinary,
  Configuration,
  Transformation,
  Util
} from "cloudinary-core";
import { pick, merge, shallowEqual, kv } from "../utils";
import { CombinedState } from "../CombinedState";
import { normalizeTransformation, normalizeConfiguration } from "../attributes";
import { setTimeout, clearTimeout } from "timers";

/**
 * Cloudinary image element
 */
export default {
  name: "CLDImage",
  props: {
    /** ID of your media file */
    publicId: { type: String, default: "", required: true },
    /**
     * Should the component conclude requested image size based on layout.
     * Potential values:
     *
     * - `fill` sets the image size as it's container,
     * - `width` sets the image *width* as it's container and allows image *height* to be set by the browser
     * - `height` sets the image *height* as it's container and allows image *width* to be set by the browser
     *
     * If you set this property without a value, `width` will be assumed.
     *
     * ```jsx
     * <CLDImage publicId="example" responsive />
     * ```
     */
    responsive: { type: String },
    breakpoints: {
      type: [Array, Function, String],
      default:
        "Symbol" in window && Symbol.iterator
          ? kv(Symbol.iterator, () => {
              let last = 0;
              return {
                next: () => {
                  last += 100;
                  return { value: last - 100, done: false };
                },
                throw: () => {},
                return: () => {}
              };
            })
          : [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    }
  },
  inject: {
    CLDContextState: {
      default() {
        return null;
      }
    }
  },
  provide() {
    return {
      CLDContextState: this.combinedState
    };
  },
  data() {
    const combinedState = new CombinedState();
    return {
      combinedState,
      allAttrsCombined: combinedState.get(),
      ready: false,
      size: null
    };
  },
  methods: {
    getOwnAttrs() {
      return merge(
        normalizeConfiguration(this),
        normalizeConfiguration(this.$attrs),
        normalizeTransformation(this),
        normalizeTransformation(this.$attrs),
        normalizeTransformation(this.getResponsiveAttrs())
      );
    },
    getResponsiveAttrs() {
      const breakpoints = evaluateArray(this.breakpoints);
      return {
        fill: merge(
          getDPRAttr(),
          {
            crop: "crop"
          },
          !this.size
            ? { width: 0, height: 0 }
            : breakpoints
            ? {
                width: Math.floor(findBreakpoint(breakpoints, this.size.width)),
                height: Math.floor(
                  (this.size.height / this.size.width) *
                    findBreakpoint(breakpoints, this.size.width)
                )
              }
            : {
                width: Math.floor(this.size.width),
                height: Math.floor(this.size.height)
              }
        ),
        width: merge(getDPRAttr(), {
          crop: "scale",
          width: Math.floor(
            !this.size
              ? 0
              : breakpoints
              ? findBreakpoint(breakpoints, this.size.width)
              : this.size.width
          )
        }),
        height: merge(getDPRAttr(), {
          crop: "scale",
          height: Math.floor(
            !this.size
              ? 0
              : breakpoints
              ? findBreakpoint(breakpoints, this.size.height)
              : this.size.height
          )
        }),
        none: {}
      }[this.responsiveMode];
    },
    startWatchingSize() {
      if ("ResizeObserver" in window) {
        const resizeObserver = new ResizeObserver(entries => {
          if (this.responsiveMode !== "none") {
            for (const entry of entries) {
              this.resize(pick(entry.contentRect, ["width", "height"]));
            }
          }
        });
        resizeObserver.observe(this.$el.querySelector("img"));
        this.stopWatchingSize = () => {
          resizeObserver.disconnect();
          this.stopWatchingSize = null;
        };
      } else {
        window.addEventListener("resize", this.handleWindowResize);
        this.handleWindowResize();
        this.stopWatchingSize = () => {
          window.removeEventListener("resize", this.handleWindowResize);
          this.stopWatchingSize = null;
        };
      }
    },
    handleWindowResize(event) {
      this.resize(pick(this.$el.getBoundingClientRect(), ["width", "height"]));
    },
    resize(size) {
      clearTimeout(this.forceUpdateTimeoutToken);
      this.forceUpdateTimeoutToken = setTimeout(() => {
        // console.log("Image:size", size);
        if (
          this.size == null ||
          this.size.width !== size.width ||
          this.size.height !== size.height
        ) {
          this.size = size;
          this.$forceUpdate();
        }
      }, 150);
    }
  },
  computed: {
    pictureAttrs() {
      return {
        fill: { class: "cld-fill" },
        width: { class: "cld-fill-width" },
        height: { class: "cld-fill-height" },
        none: {}
      }[this.responsiveMode];
    },
    imageAttrs() {
      if (
        !this.ready ||
        this.allAttrsCombined.width === 0 ||
        this.allAttrsCombined.height === 0
      ) {
        return {};
      }
      const cfg = merge(
        this.allAttrsCombined,
        Util.withSnakeCaseKeys(this.allAttrsCombined)
      );
      // console.log("Image:attrs", JSON.stringify(cfg));
      try {
        const htmlAttrs = Transformation.new(cfg).toHtmlAttributes();
        const src = Cloudinary.new(cfg).url(this.publicId, cfg);
        return merge(htmlAttrs, {
          src
        });
      } catch (e) {
        console.error("image attributes generation error");
        console.error(e);
        return {};
      }
    },
    responsiveMode() {
      return typeof this.responsive === "string"
        ? {
            fill: "fill",
            width: "width",
            height: "height",
            "": "width"
          }[this.responsive]
        : "none";
    }
  },
  created() {
    if (this.CLDContextState) {
      this.contextState = this.combinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          // console.log("Image:parent", JSON.stringify(v));
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.combinedState.spawn();
    const current = this.getOwnAttrs();
    // console.log("Image:own", JSON.stringify(current));
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        // console.log("Image:all", JSON.stringify(v));
        this.allAttrsCombined = v;
      }
    });

    if (!this.$slots || !this.$slots.default || !this.$slots.default.length) {
      this.ready = true;
    }
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getOwnAttrs();
    if (!shallowEqual(prev, current)) {
      // console.log("Image:own", JSON.stringify(current));
      this.ownState.next(current);
    }

    if (
      this.ready &&
      this.responsiveMode !== "none" &&
      !this.stopWatchingSize
    ) {
      this.startWatchingSize();
    }
  },
  mounted() {
    if (!this.ready) {
      this.ready = true;
    }

    if (this.responsiveMode !== "none") {
      this.startWatchingSize();
    }
  },
  destroyed() {
    // console.log("Image:destroyed");
    this.combinedStateSub();
    this.ownState.complete();

    if (this.contextStateSub) {
      this.contextStateSub();
    }
    if (this.contextState) {
      this.contextState.complete();
    }

    if (this.stopWatchingSize) {
      this.stopWatchingSize();
    }
  }
};

function evaluateArray(valueOrGetter, args) {
  if (typeof valueOrGetter === "function") {
    return valueOrGetter.apply(null, args);
  }
  if (typeof valueOrGetter === "string") {
    return JSON.parse(
      (valueOrGetter.slice(0, 1) === "[" ? "" : "[") +
        valueOrGetter +
        (valueOrGetter.slice(0, 1) === "]" ? "" : "]")
    );
  }
  return valueOrGetter;
}

function getDPRAttr() {
  return "devicePixelRatio" in window ? { dpr: window.devicePixelRatio } : {};
}

function findBreakpoint(stops, value) {
  for (const stop of stops) {
    if (stop >= value) {
      return stop;
    }
  }
  return stops.slice(-1)[0];
}
</script>

<style lang="scss">
.cld-image {
  &,
  img {
    display: inline-block;
  }
  img {
    width: 100%;
  }

  &.cld-fill-height {
    &,
    img {
      display: block;
      height: 100%;
      width: auto;
    }
  }

  &.cld-fill-width {
    &,
    img {
      display: block;
      width: 100%;
    }
  }

  &.cld-fill {
    &,
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
