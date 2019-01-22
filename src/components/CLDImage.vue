<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, shallowEqual } from "../utils";
import { CombinedState } from "../reactive/CombinedState";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeRest
} from "../helpers/attributes";
import { evalBreakpoints } from "../helpers/evalBreakpoints";
import { hundredsIterator } from "../helpers/hundredsIterator";
import { getResizeTransformation } from "../helpers/getResizeTransformation";
import { watchElementSize } from "../helpers/watchElementSize";

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
     *
     */
    breakpoints: {
      type: [Array, Function, String, Object]
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
    const attrsCombinedState = new CombinedState();
    return {
      attrsCombinedState,
      attrsCombined: attrsCombinedState.get(),
      ready: false,
      size: null
    };
  },
  methods: {
    getOwnAttrs() {
      return merge(
        normalizeConfiguration(this.$attrs),
        normalizeTransformation(this.$attrs),
        normalizeTransformation(this.getResponsiveAttrs())
      );
    },
    getResponsiveAttrs() {
      return getResizeTransformation(
        this.responsiveMode,
        this.size,
        evalBreakpoints(this.breakpoints || hundredsIterator)
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
      if (!shallowEqual(this.size, size)) {
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
        this.attrsCombined.width === 0 ||
        this.attrsCombined.height === 0 ||
        !this.publicId
      ) {
        return { class: className };
      }

      const htmlAttrs = Transformation.new(
        this.attrsCombined
      ).toHtmlAttributes();
      const src = Cloudinary.new(this.attrsCombined).url(
        this.publicId,
        this.attrsCombined
      );
      return {
        class: className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs, {
          src
        })
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
    const current = this.getOwnAttrs();
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
    const current = this.getOwnAttrs();
    if (!shallowEqual(prev, current)) {
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
