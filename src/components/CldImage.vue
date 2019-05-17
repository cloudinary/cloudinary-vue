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
 * Deliver images and specify image transformations using the cld-image (CldImage) component,
 * which automatically generates an `<img>` tag including the dynamic URL of the image source.
 *
 *
 * You can optionally include [cld-transformation](#cldtransformation) components to define transformations to apply to the delivered image.
 *
 * For more information see the
 * <a href="https://cloudinary.com/documentation/vue_image_manipulation#cldvideo_component" target="_blank">
 * cld-image component</a> and
 * <a href="https://cloudinary.com/documentation/image_transformations#embedding_images_in_web_pages"
 * target="_blank">embedding images in web pages</a> documentation.
 */
export default {
  name: "CldImage",
  inheritAttrs: false,
  mixins: [ready, size, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h("img", this.imageAttrs, this.$slots.default);
  },
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: { type: String, default: "", required: true },
    /**
     * Whether to generate a JPEG using the [progressive (interlaced) JPEG
     * format](https://cloudinary.com/documentation/transformation_flags#delivery_and_image_format_flags).
     */
    progressive: {
      type: Boolean,
      default: false
    },
    /**
     * The placeholder image to use while the image is loading. Possible values:
     *
     * - `"lqip"` to use a low quality image
     * - `"color"` to use an average color image
     * - `"pixelate"` to use a pixelated image
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * How to make the image responsive to the available size based on layout. Possible values:
     *
     * - `width` uses the available image *width* and allows image *height* to be set dynamically
     * - `height` uses the available image *height* and allows image *width* to be set dynamically
     * - `fill` uses the available image *width* and *height*
     */
    responsive: { type: String, default: "none" },
    /**
     * The set of possible breakpoint values to be used together with the responsive property. Either:
     *
     * - an array of numbers
     * - a comma separated list of numbers as a single string
     * - a function that returns an array of numbers
     */
    breakpoints: {
      type: [Array, Function, String],
      default: () => range(100, 4000, 100)
    }
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
        this.responsive !== "none" && this.size
          ? {
              transformation: []
                .concat(this.$attrs.transformation || [])
                .concat(
                  getResizeTransformation(
                    this.responsive,
                    this.size,
                    evalBreakpoints(this.breakpoints)
                  )
                )
            }
          : {}
      );
    },
    shouldMeasureSize() {
      return this.responsive !== "none";
    },
    imageAttrs() {
      const className = {
        "cld-image": true,
        "cld-fill": this.responsive === "fill",
        "cld-fill-width": this.responsive === "width" || this.responsive === "",
        "cld-fill-height": this.responsive === "height"
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

      const htmlAttrs = Transformation.new(
        this.cldAttrs.transformation
      ).toHtmlAttributes();
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
