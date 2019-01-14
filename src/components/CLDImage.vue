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
import { pick, merge, shallowEqual } from "../utils";
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
    responsive: { type: String }
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
      combinedStateValue: combinedState.get(),
      ready: false,
      size: null
    };
  },
  methods: {
    getConfig() {
      return merge(
        normalizeConfiguration(this),
        normalizeConfiguration(this.$attrs),
        normalizeTransformation(this),
        normalizeTransformation(this.$attrs),
        normalizeTransformation(this.getResponsiveAttrs())
      );
    },
    getResponsiveAttrs() {
      return {
        fill: this.size
          ? {
              ...("devicePixelRatio" in window
                ? { dpr: window.devicePixelRatio }
                : {}),
              crop: "scale",
              width: Math.floor(this.size.width),
              height: Math.floor(this.size.height)
            }
          : {},
        width: this.size
          ? {
              ...("devicePixelRatio" in window
                ? { dpr: window.devicePixelRatio }
                : {}),
              crop: "scale",
              width: Math.floor(this.size.width)
              // height: Math.floor(this.size.height)
            }
          : {},
        height: this.size
          ? {
              ...("devicePixelRatio" in window
                ? { dpr: window.devicePixelRatio }
                : {}),
              crop: "scale",
              // width: Math.floor(this.size.width),
              height: Math.floor(this.size.height)
            }
          : {},
        none: {}
      }[this.responsiveness];
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
          console.log("update", this.$attrs.title, this.size, size);
          this.size = size;
          this.$forceUpdate();
        }
      }, 150);
    }
  },
  computed: {
    responsiveness() {
      return typeof this.responsive === "string"
        ? {
            fill: "fill",
            width: "width",
            height: "height",
            "": "width"
          }[this.responsive]
        : "none";
    },
    pictureAttrs() {
      return {
        fill: { class: "cld-fill" },
        width: { class: "cld-fill-width" },
        height: { class: "cld-fill-height" },
        none: {}
      }[this.responsiveness];
    },
    imageAttrs() {
      if (!this.ready) {
        return {};
      }
      if (
        this.responsiveness !== "none" &&
        (this.width === null || this.height === null)
      ) {
        return {};
      }
      const attrs = this.combinedStateValue;
      const cfg = merge(attrs, Util.withSnakeCaseKeys(attrs));
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
    const current = this.getConfig();
    // console.log("Image:own", JSON.stringify(current));
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        // console.log("Image:all", JSON.stringify(v));
        this.combinedStateValue = v;
      }
    });

    if (!this.$slots || !this.$slots.default || !this.$slots.default.length) {
      this.ready = true;
    }
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getConfig();
    if (!shallowEqual(prev, current)) {
      // console.log("Image:own", JSON.stringify(current));
      this.ownState.next(current);
    }
    if (this.ready && !this.resizeHandlersRegistered) {
      this.resizeHandlersRegistered = true;

      if ("ResizeObserver" in window) {
        this.resizeObserver = new ResizeObserver(entries => {
          if (this.responsiveness !== "none") {
            for (const entry of entries) {
              const size = pick(entry.contentRect, ["width", "height"]);
              console.log({ size });
              this.resize(size);
            }
          }
        });
        this.resizeObserver.observe(this.$el.querySelector("img"));
      } else {
        window.addEventListener("resize", this.handleWindowResize);
        this.handleWindowResize();
      }
    }
  },
  mounted() {
    if (!this.ready) {
      this.ready = true;
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

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } else {
      window.removeEventListener("resize", this.handleWindowResize);
    }
  }
};
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
