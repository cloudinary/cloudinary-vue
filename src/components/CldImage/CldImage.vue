<script>
import { setup } from '../../mixins/setup';
import { compute } from '../../mixins/compute';
import { register } from '../../mixins/registerTransformation'
import { computePlaceholder } from '../../helpers/computeOptions'
import { getCldPlaceholder, isCldPlaceholder } from '../../helpers/findComponent'
import {
  ACCESSIBILITY_TRANSFORMATIONS,
  PLACEHOLDER_TRANSFORMATIONS,
  COMPONENTS,
  LAZY_LOADING,
  IMAGE_CLASSES,
  IMAGE_WITH_PLACEHOLDER_CSS,
  RESPONSIVE_CSS,
  PLACEHOLDER_CLASS,
  CLD_IMAGE_WRAPPER_CLASS
} from '../../constants';
import { size } from "../../mixins/size";
import { lazy } from "../../mixins/lazy";
import {getDevicePixelRatio} from '../../utils/getDevicePixelRatio';

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
  name: COMPONENTS.CldImage,
  mixins: [setup, compute, lazy, size, register],
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
     * **Deprecated**
     *
     * The placeholder image to use while the image is loading. Possible values:
     * - `"blur"` to use blur placeholder
     * - `"lqip"` to use a low quality image
     * - `"color"` to use an average color image
     * - `"pixelate"` to use a pixelated image
     * - `"vectorize"` to use a vectorized image
     * - `"predominant-color" to use a predominant color image
     * @deprecated - Use CldPlaceholder instead
     */
    placeholder: {
      type: String,
      default: "",
      validator: value => !value || !!PLACEHOLDER_TRANSFORMATIONS[value]
    },

    /**
     * Out-of-the-box support for accessibility mode, including colorblind and dark/light mode
     */
    accessibility: {
      type: String,
      default: "",
      validator: value => !value || !!ACCESSIBILITY_TRANSFORMATIONS[value]
    }
  },
  data() {
    return {
      imageLoaded: false,
      cloudinary: null,
    }
  },
  methods: {
    load() {
      this.imageLoaded = true;
    },
    renderImageOnly(src, hasPlaceholder = false) {
      const imgClass = `${IMAGE_CLASSES.DEFAULT} ${!this.imageLoaded ? IMAGE_CLASSES.LOADING : IMAGE_CLASSES.LOADED}`
      const style = {
        ...(this.responsive ? RESPONSIVE_CSS[this.responsive] : {}),
        ...(!this.imageLoaded && hasPlaceholder ? IMAGE_WITH_PLACEHOLDER_CSS[IMAGE_CLASSES.LOADING] : {})
      }

      return (
        <img
          attrs={this.$attrs}
          src={src}
          loading={this.hasLazyLoading ? LAZY_LOADING : null}
          class={imgClass}
          onload={this.load}
          style={style}
        />
      )
    },
    renderComp(children) {
      this.setup(this.$attrs)

      if (this.placeholder) {
        // eslint-disable-next-line
        console.warn ('The prop "placeholder" has been deprecated, please use the cld-placeholder component');
      }

      const responsiveModeNoSize = this.responsive && !this.size
      const lazyModeInvisible = this.hasLazyLoading && !this.visible
      const options = this.computeURLOptions()

      let src = responsiveModeNoSize || lazyModeInvisible ? '' : this.cloudinary.url(this.publicId, this.toSnakeCase(options));
      // Update dpr_auto to dpr_1.0, 2.0 etc but only for responsive mode
      // This matches the behaviour in other SDKs
      if (this.responsive) {
        src = src.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + getDevicePixelRatio(true));
      }

      const cldPlaceholder = getCldPlaceholder(children)
      const cldPlaceholderType = cldPlaceholder ? (cldPlaceholder.componentOptions?.propsData?.type || 'blur') : ''
      const placeholderType = cldPlaceholderType || this.placeholder

      const placeholderOptions = placeholderType ? this.toSnakeCase(computePlaceholder(placeholderType, options)) : null

      if (!placeholderOptions) {
        return this.renderImageOnly(src)
      }

      const placeholder = responsiveModeNoSize ? '' : this.cloudinary.url(this.publicId, placeholderOptions)
      const displayPlaceholder = !this.imageLoaded && placeholder

      return (
        <div class={CLD_IMAGE_WRAPPER_CLASS}>
        { this.renderImageOnly(src, true) }
        { displayPlaceholder && (
          <img
              src={placeholder}
              attrs={this.$attrs}
              class={PLACEHOLDER_CLASS}
              style={IMAGE_WITH_PLACEHOLDER_CSS[PLACEHOLDER_CLASS]}
            />) }
        </div>
      )
    }
  },
  render(h) {
    if (!this.publicId) return null

    const children = this.$slots.default || []
    const hasExtraTransformations = children.length > 1 || (children.length === 1 && !isCldPlaceholder(children[0]))

    /* Render the children first to get the extra transformations (if there is any) */
    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h(
        "img", {
          attrs: this.attrs
        },
        this.$slots.default
      );
    }

    return this.renderComp(children)
  }
};
</script>
