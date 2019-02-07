<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, equal, find, range, assign } from "../utils";
import { CombinedState } from "../reactive/CombinedState";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeRest
} from "../helpers/attributes";
import { evalBreakpoints } from "../helpers/evalBreakpoints";
import { getResizeTransformation } from "../helpers/getResizeTransformation";
import { combineOptions } from "../helpers/combineOptions";
import { BehaviourGroup } from "../behaviours/BehaviourGroup";
import { Resizing } from "../behaviours/Resizing";
import { Mounting } from "../behaviours/Mounting";
import { CombineWithContext } from "../behaviours/CombineWithContext";
import { MaterializeCombinedState } from "../behaviours/MaterializeCombinedState";
import { CombineWithOwn } from "../behaviours/CombineWithOwn";
import { Lazy } from "../behaviours/Lazy";

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
      default: () => range(100, 4000, 100)
    },
    /**
     * If true sets an additional flag in a request path that indicates that
     * [Cloudinary should generate a JPEG using the progressive (interlaced) JPEG format](https://cloudinary.com/documentation/transformation_flags#delivery_and_image_format_flags)
     */
    progressive: {
      type: Boolean,
      default: false
    },
    /**
     * If set to true activates a behaviour
     * where the image is not loaded
     * unless the HTML element is visible on page
     */
    lazy: {
      type: Boolean,
      default: false
    },
    /**
     */
    placeholder: {
      type: String,
      default: ""
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
      const configuration = normalizeConfiguration(attrs);
      const transformation = normalizeTransformation(attrs);
      const responsive = this.getResponsiveAttrs();
      return combineOptions(
        { configuration, transformation },
        responsive ? { transformation: { transformation: [responsive] } } : {}
      );
    },
    getResponsiveAttrs() {
      return getResizeTransformation(
        this.responsiveMode,
        this.size,
        evalBreakpoints(this.breakpoints)
      );
    },
    getPlaceholder() {
      return (
        {
          lqip: Cloudinary.new(this.attrsCombined.configuration).url(
            this.publicId,
            this.attrsCombined.transformation.concat({
              rawTransformation: "$nw_iw,w_20,q_20/w_$nw"
            })
          ),
          color: Cloudinary.new(this.attrsCombined.configuration).url(
            this.publicId,
            {
              transformation: this.attrsCombined.transformation
                // .concat({
                //   rawTransformation: "$nh_ih,$nw_iw,w_1,h_1,q_20/w_$nw,h_$nh"
                // })
                .concat([
                  {
                    variables: [["nh", "ih"], ["nw", "iw"]],
                    width: "1",
                    height: "1",
                    quality: 20
                  },
                  { width: "$nw", height: "nh" }
                ])
            }
          ),
          pixelate: Cloudinary.new(this.attrsCombined.configuration).url(
            this.publicId,
            this.attrsCombined.transformation.concat({
              rawTransformation: "e_pixelate:100"
            })
          )
        }[this.placeholder] || this.placeholder
      );
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
        this.attrsCombined.width === 0 ||
        this.attrsCombined.height === 0 ||
        find(
          this.attrsCombined.transformation.transformation || [],
          t => t.width === 0
        ) ||
        find(
          this.attrsCombined.transformation.transformation || [],
          t => t.height === 0
        )
      ) {
        return {
          class: className,
          attrs:
            this.publicId && this.placeholder
              ? {
                  src: this.getPlaceholder()
                }
              : {}
        };
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
    },
    lazyMode() {
      return this.lazy ? "lazy" : "none";
    }
  },
  created() {
    this.behaviours = new BehaviourGroup(
      {
        mounting: Mounting,
        resizing: Resizing,
        context: CombineWithContext,
        own: CombineWithOwn,
        materialize: MaterializeCombinedState,
        lazy: Lazy
      },
      this
    );

    this.behaviours.onCreated();
  },
  updated() {
    this.behaviours.onUpdated();
  },
  mounted() {
    this.behaviours.onMounted();
  },
  destroyed() {
    this.behaviours.onDestroyed();
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
