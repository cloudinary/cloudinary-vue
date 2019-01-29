<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, equal, find } from "../utils";
import { CombinedState } from "../reactive/CombinedState";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeRest
} from "../helpers/attributes";
import { evalBreakpoints } from "../helpers/evalBreakpoints";
import { getResizeTransformation } from "../helpers/getResizeTransformation";
import { watchElementSize } from "../helpers/watchElementSize";
import { combineOptions } from "../helpers/combineOptions";

/**
 * Cloudinary image element
 */
export default {
  name: "CLDImage",
  inheritAttrs: false,
  render(h) {
    return h("img", this.imageAttrs, this.$slots.default);
  },
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
     * Should be:
     *
     * - an array of numbers
     * - comma separated list of numbers in a `string`
     * - function that returns an array of numbers
     */
    breakpoints: {
      type: [Array, Function, String],
      default() {
        return [
          100,
          200,
          300,
          400,
          500,
          600,
          700,
          800,
          900,
          1000,
          1100,
          1200,
          1300,
          1400,
          1500,
          1600,
          1700,
          1800,
          1900,
          2000,
          2100,
          2200,
          2300,
          2400,
          2500,
          2600,
          2700,
          2800,
          2900,
          3000,
          3100,
          3200,
          3300,
          3400,
          3500,
          3600,
          3700,
          3800,
          3900
        ];
      }
    },
    /**
     * If true sets an additional flag in a request path that indicates that
     * [Cloudinary should generate a JPEG using the progressive (interlaced) JPEG format](https://cloudinary.com/documentation/transformation_flags#delivery_and_image_format_flags)
     */
    progressive: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    CLDContextState: {
      default() {
        return this.CLDGlobalContextState ? this.CLDGlobalContextState : null;
      }
    }
  },
  provide() {
    return {
      CLDImageState: this.attrsCombinedState
    };
  },
  data() {
    const attrsCombinedState = new CombinedState(combineOptions);
    return {
      attrsCombinedState,
      attrsCombined: attrsCombinedState.get(),
      ready: false,
      size: null
    };
  },
  methods: {
    getOwnCLDAttrs() {
      const attrs =
        this.progressive == true
          ? merge(this.$attrs, {
              flags: []
                .concat(this.$attrs.flags ? this.$attrs.flags : [])
                .concat("progressive")
            })
          : this.$attrs;
      const responsive = this.getResponsiveAttrs();
      return {
        configuration: normalizeConfiguration(attrs),
        transformation: [normalizeTransformation(attrs)].concat(
          responsive ? normalizeTransformation(responsive) : []
        )
      };
    },
    getResponsiveAttrs() {
      return getResizeTransformation(
        this.responsiveMode,
        this.size,
        evalBreakpoints(this.breakpoints)
      );
    },
    startWatchingSize() {
      if (!this._stopWatchingSize) {
        this._stopWatchingSize = watchElementSize(this.$el, size =>
          this.resize(size)
        );
      }
    },
    stopWatchingSize() {
      if (this._stopWatchingSize) {
        this._stopWatchingSize();
        this._stopWatchingSize = null;
      }
    },
    resize(size) {
      if (!equal(this.size, size)) {
        this.size = size;
        this.$forceUpdate();
      }
    }
  },
  computed: {
    imageAttrs() {
      const className = {
        "cld-image": true,
        "cld-fill": this.responsiveMode === "fill",
        "cld-fill-width": this.responsiveMode === "width",
        "cld-fill-height": this.responsiveMode === "height"
      };
      if (
        !this.ready ||
        !this.publicId ||
        find(this.attrsCombined.transformation, t => t.width === 0) ||
        find(this.attrsCombined.transformation, t => t.height === 0)
      ) {
        return { class: className };
      }

      const htmlAttrs = Transformation.new({
        transformation: this.attrsCombined.transformation
      }).toHtmlAttributes();
      const src = Cloudinary.new(this.attrsCombined.configuration).url(
        this.publicId,
        this.attrsCombined
      );
      return {
        class: className,
        attrs: merge(
          normalizeRest(this.$attrs),
          htmlAttrs,
          src
            ? {
                src
              }
            : {}
        )
      };
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
      this.contextState = this.attrsCombinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.attrsCombinedState.spawn();
    const current = this.getOwnCLDAttrs();
    this.ownState.next(current);

    this.attrsCombinedStateSub = this.attrsCombinedState.subscribe({
      next: v => {
        this.attrsCombined = v;
      }
    });

    if (
      !this.CLDContextState &&
      (!this.$slots || !this.$slots.default || !this.$slots.default.length)
    ) {
      this.ready = true;
    }
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getOwnCLDAttrs();
    if (!equal(prev, current)) {
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
    this.attrsCombinedStateSub();
    this.ownState.complete();

    if (this.contextStateSub) {
      this.contextStateSub();
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
  &.cld-fill-height {
    display: block;
    height: 100%;
    width: auto;
  }

  &.cld-fill-width {
    display: block;
    width: 100%;
  }

  &.cld-fill {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
