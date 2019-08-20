<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, range } from "../utils";
import { findInTransformations } from "../helpers/findInTransformations";
import { normalizeNonCloudinary } from "../helpers/attributes";
import { evalBreakpoints } from "../helpers/evalBreakpoints";
import {
  getResizeTransformation,
  getResponsiveStyle
} from "../helpers/responsiveness";
import { getPlaceholderURL } from "../helpers/getPlaceholderURL";

import { size } from "../mixins/size";
import { lazy } from "../mixins/lazy";
import { rejectTransformations } from "../helpers/rejectTransformations";
import { withOptions } from "../mixins/withOptions";

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

  mixins: [size, lazy, withOptions],

  render(h) {
    return h(
      "img",
      this.imageAttrs,
      rejectTransformations(this.$slots.default)
    );
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
     * - `false` turns the feature off
     * - `"width"` and `true` uses the available image *width* and allows image *height* to be set dynamically
     * - `"height"` uses the available image *height* and allows image *width* to be set dynamically
     * - `"fill"` uses the available image *width* and *height*
     */
    responsive: { type: [Boolean, String], default: false },
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
    imageAttrs() {
      const className = {
        "cld-image": true
      };

      if (
        !this.publicId ||
        !!findInTransformations(
          this.transformation,
          t => t.width === 0 || t.height === 0
        ) ||
        (this.responsive && !this.size)
      ) {
        return {
          class: className,
          style: getResponsiveStyle(this.responsive),
          attrs: normalizeNonCloudinary(this.$attrs)
        };
      }

      if (this.lazy && !this.visible) {
        const src = getPlaceholderURL(
          this.placeholder,
          this.publicId,
          this.configuration,
          this.transformation
        );
        return {
          class: className,
          style: getResponsiveStyle(this.responsive),
          attrs: merge(normalizeNonCloudinary(this.$attrs), src ? { src } : {})
        };
      }

      const src = Cloudinary.new(this.configuration).url(this.publicId, {
        transformation: [
          ...this.transformation,
          getResizeTransformation(
            this.responsive,
            this.size,
            evalBreakpoints(this.breakpoints)
          ),
          ...(this.progressive ? [{ flags: ["progressive"] }] : [])
        ]
      });

      const htmlAttrs = Transformation.new(
        this.ownTransformation
      ).toHtmlAttributes();

      return {
        class: className,
        style: getResponsiveStyle(this.responsive),
        attrs: merge(
          normalizeNonCloudinary(this.$attrs),
          htmlAttrs,
          src
            ? {
                src
              }
            : {}
        )
      };
    },

    shouldMeasureSize() {
      return !this.responsive;
    }
  }
};
</script>
