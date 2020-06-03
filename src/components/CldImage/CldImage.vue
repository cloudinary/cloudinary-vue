<template>
  <div class="cld-image" :style="wrapperStyle">
    <img @load="onImageLoad" v-bind="imageAttrs" :style="style"/>
    <slot></slot>
  </div>
</template>
<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, range } from "../../utils";
import {accessibilityTransformations} from '../../constants';
import {
  normalizeNonCloudinary,
  normalizeTransformation,
  normalizeConfiguration,
  getHTMLAttributes,
  hasZeroSizeTransformation
} from "../../helpers/attributes";
import { evalBreakpoints } from "../../helpers/evalBreakpoints";
import {
  getResizeTransformation,
  getResponsiveStyle
} from "../../helpers/responsiveness";
import { getPlaceholderURL } from "../../helpers/getPlaceholderURL";

import { size } from "../../mixins/size";
import { lazy } from "../../mixins/lazy";
import { withOptions } from "../../mixins/withOptions";
import { generateUrl } from "../../helpers/URLGenerator";

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
  mixins: [lazy, size, withOptions],
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
    },

    /**
     * One of [monochrome, darkmode, brightmode, colorblind]
     */
    accessibility: {
      type: String,
      default: ""
    }
  },
  provide() {
    return {
      registerTransformation: this.registerTransformation,
      getTransformOptions: () => {
        return this.transformOptions;
      },
      configuration: this.configuration,
      publicId: this.publicId,
      isImageLoaded: () => {
        return this.imageLoaded;
      },
      registerPlaceHolder: () => {
        this.hasPlaceholderComponent = true;
      },
      getImageWidth: () => {
        // This gets populated from the <cld-image width=500/> tag
        return this.transformOptions.width;
      },
      getImageHeight: () => {
        // This gets populated from the <cld-image height=500/> tag
        return this.transformOptions.height;
      },
      getNonCldAttrs: () => {
        return this.nonCldAttrs;
      }
    };
  },
  inject: {
    contextConfiguration: {
      default: {}
    }
  },
  data() {
    return {
      transformations: [],
      imageLoaded: false,
      hasPlaceholderComponent: false
    };
  },
  methods: {
    onImageLoad() {
      this.imageLoaded = true;
      // Flag the placeholder as removed when image loads
      this.hasPlaceholderComponent = false;
    },
    registerTransformation(transformation) {
      this.transformations = [
        ...this.transformations,
        normalizeTransformation(transformation)
      ];
    },
    computeLazyLoadSrc() {
      // This is the 'old' placeholder functionality,
      // Deprecating for now, will be deleted in the future
      if (this.placeholder) {
        // eslint-disable-next-line
        console.warn ('The prop "placeholder" has been deprecated, please use the cld-placeholder component');
      }
      const src = getPlaceholderURL(
        this.placeholder,
        this.publicId,
        this.configuration,
        this.transformOptions
      );

      return {
        ...this.nonCldAttrs,
        src
      };
    }
  },
  computed: {
    isWithoutTransformation() {
      return (
        !this.publicId ||
        hasZeroSizeTransformation(this.transformations) ||
        (this.responsive && !this.size)
      );
    },
    wrapperStyle() {
      return getResponsiveStyle(this.responsive)
    },
    style() {
      if (this.hasPlaceholderComponent) {
        return {
          ...getResponsiveStyle(this.responsive),
          opacity: '0',
          position: 'absolute'
        };
      } else {
        return getResponsiveStyle(this.responsive);
      }
    },
    nonCldAttrs() {
      return normalizeNonCloudinary(this.$attrs);
    },
    transformOptions() {
      return {
        ...this.options,
        transformation: [
          ...(this.options.transformation || []),
          ...this.transformations
        ]
      };
    },
    isLazyLoadInvisible() {
      if (this.lazy) {
        // eslint-disable-next-line
        console.warn ('The prop "lazy" has been deprecated, please use loading="lazy"');
      }
      const shouldLazyLoad = this.lazy || this.loading === 'lazy';

      return shouldLazyLoad && !this.visible;
    },
    imageSrc() {
      const accessibilityTrans = this.accessibility && accessibilityTransformations[this.accessibility] || {};

      return generateUrl({
        publicId: this.publicId,
        configuration: this.configuration,
        transformation: {
          ...this.options,
          transformation: [
            ...this.transformOptions.transformation,
            getResizeTransformation(
              this.responsive,
              this.size,
              evalBreakpoints(this.breakpoints)
            ),
            ...(this.progressive ? [{ flags: ["progressive"] }] : []),
            // if accessibility mode is present, include it as a transformation
            accessibilityTrans
          ]
        }
      });
    },
    imageAttrs() {
      if (this.isWithoutTransformation) {
        return this.nonCldAttrs;
      }

      if (this.isLazyLoadInvisible) {
        return this.computeLazyLoadSrc();
      }

      const htmlAttrs = getHTMLAttributes(this.options);
      const src = this.imageSrc;

      return {
        ...this.nonCldAttrs,
        ...htmlAttrs,
        src
      };
    },
    shouldMeasureSize() {
      return this.responsive !== false;
    }
  }
};
</script>
