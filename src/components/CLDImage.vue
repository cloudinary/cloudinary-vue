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
import { getDPRAttr } from "../getDPRAttr";
import { findBreakpoint } from "../findBreakpoint";
import { evalBreakpoints } from "../evalBreakpoints";
import { hundredsIterator } from "../hundredsIterator";
import { getResizeTransformation } from "../getResizeTransformation";
import { watchElementSize } from "../watchElementSize";

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
    /**
     *
     */
    breakpoints: {
      type: [Array, Function, String, Object]
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
    /**
     * @private
     */
    getOwnAttrs() {
      return merge(
        normalizeConfiguration(this),
        normalizeConfiguration(this.$attrs),
        normalizeTransformation(this),
        normalizeTransformation(this.$attrs),
        normalizeTransformation(this.getResponsiveAttrs())
      );
    },
    /**
     * @private
     */
    getResponsiveAttrs() {
      return getResizeTransformation(
        this.responsiveMode,
        this.size,
        evalBreakpoints(this.breakpoints || hundredsIterator)
      );
    },
    /**
     * @private
     */
    startWatchingSize() {
      if (!this._stopWatchingSize) {
        this._stopWatchingSize = watchElementSize(
          this.$el.querySelector("img"),
          size => this.resize(size)
        );
      }
    },
    /**
     * @private
     */
    stopWatchingSize() {
      if (this._stopWatchingSize) {
        this._stopWatchingSize();
        this._stopWatchingSize = null;
      }
    },
    /**
     * @private
     */
    resize(size) {
      if (!shallowEqual(this.size, size)) {
        this.size = size;
        this.$forceUpdate();
      }
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

    if (this.ready) {
      if (this.responsiveMode === "none") {
        if (this.stopWatchingSize) {
          this.stopWatchingSize();
        }
      } else {
        this.startWatchingSize();
      }
    }
  },
  mounted() {
    if (this.ready) {
      if (this.responsiveMode !== "none") {
        this.startWatchingSize();
      }
    } else {
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

    if (this.stopWatchingSize) {
      this.stopWatchingSize();
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
