<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, range } from "../utils";
import { findInTransformations } from "../helpers/findInTransformations";
import { normalizeRest } from "../helpers/attributes";
import { evalBreakpoints } from "../helpers/evalBreakpoints";
import { getResizeTransformation } from "../helpers/getResizeTransformation";
import { getPlaceholderURL } from "../helpers/getPlaceholderURL";
import { combineOptions } from "../helpers/combineOptions";

import { ready } from "../mixins/ready";
import { size } from "../mixins/size";
import { mounted } from "../mixins/mounted";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { lazy } from "../mixins/lazy";

/**
 * Cloudinary image element
 */
export default {
  name: "CldImage",
  inheritAttrs: false,
  mixins: [ready, size, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h("img", this.imageAttrs, this.$slots.default);
  },
  props: {
    /** ID of your media file */
    publicId: { type: String, default: "", required: true },
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
     * Paired with
     *
     * Possible values:
     * - `"lqip"` - low quality image
     * - `"color"` - average color
     * - `"pixelate"` - pixelated image
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * Should the component conclude requested image size based on layout.
     * Potential values:
     *
     * - `fill` sets the image size as it's container,
     * - `width` sets the image *width* as it's container and allows image *height* to be set by the browser
     * - `height` sets the image *height* as it's container and allows image *width* to be set by the browser
     *
     * If you set this property without a value, `width` will be assumed.
     */
    responsive: { type: String }
  },
  computed: {
    attributes() {
      return merge(
        this.$attrs,
        this.progressive == true
          ? {
              flags: []
                .concat(this.$attrs.flags ? this.$attrs.flags : [])
                .concat("progressive")
            }
          : {},
        this.responsiveMode !== "none" && this.size
          ? {
              transformation: []
                .concat(this.$attrs.transformation || [])
                .concat(
                  getResizeTransformation(
                    this.responsiveMode,
                    this.size,
                    evalBreakpoints(this.breakpoints)
                  )
                )
            }
          : {}
      );
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
    shouldMeasureSize() {
      return this.responsiveMode !== "none";
    },
    imageAttrs() {
      const className = {
        "cld-image": true,
        "cld-fill": this.responsiveMode === "fill",
        "cld-fill-width": this.responsiveMode === "width",
        "cld-fill-height": this.responsiveMode === "height"
      };
      if (
        !this.isReady ||
        !this.publicId ||
        !!findInTransformations(
          this.cldAttrs.transformation,
          t => t.width === 0 || t.height === 0
        )
      ) {
        return {
          class: className
        };
      }

      if (this.lazy && !this.visible) {
        return {
          class: className,
          attrs: this.placeholder
            ? {
                src:
                  getPlaceholderURL(
                    this.placeholder,
                    combineOptions({ publicId: this.publicId }, this.cldAttrs)
                  ) || this.placeholder
              }
            : {}
        };
      }

      const htmlAttrs = Transformation.new({
        transformation: this.cldAttrs.transformation
      }).toHtmlAttributes();
      const src = Cloudinary.new(this.cldAttrs.configuration).url(
        this.publicId,
        this.cldAttrs
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
