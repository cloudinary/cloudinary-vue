<script>
import { setup } from '../../mixins/setup';
import { compute } from '../../mixins/compute';
import { lazy } from '../../mixins/lazy';
import { responsive } from '../../mixins/size'
import { register } from '../../mixins/register';
import { computePlaceholder, getCldPlaceholder, isCldPlaceholder } from '../../cloudinary/helper'
import { 
  ACCESSIBILITY_TRANSFORMATIONS, 
  COMPONENTS,
  PLACEHOLDER_TRANSFORMATIONS, 
  RESPONSIVE_CSS, 
  IMAGE_CLASSES, 
  PLACEHOLDER_CLASS, 
  IMAGE_WITH_PLACEHOLDER_CSS, 
  LAZY_LOADING, 
  CLD_IMAGE_WRAPPER_CLASS
} from '../../constants';

export default {
  name: COMPONENTS.CldImage,
  mixins: [setup, compute, lazy, responsive, register],
  data() {
    return {
      isImgLoaded: false,
      cloudinary: null,
    }
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
    progressive: { type: Boolean, default: false },
    /**
     * Accepted value: monochrome | darkmode | brightmode | colorblind
     */
    accessibility: {
      type: String,
      default: "",
      validator: value => !value || !!ACCESSIBILITY_TRANSFORMATIONS[value]
    },
    /**
     * Type of placeholder
     * @deprecated
     */
    placeholder: {
      type: String,
      default: '',
      validator: value => !value || !!PLACEHOLDER_TRANSFORMATIONS[value]
    },
  },
  methods: {
    load() {
      this.isImgLoaded = true
    },
    renderImageOnly(src, hasPlaceholder = false) {
      const imgClass = `${IMAGE_CLASSES.DEFAULT} ${!this.isImgLoaded ? IMAGE_CLASSES.LOADING : IMAGE_CLASSES.LOADED}`
      const style = {
        ...(this.responsive ? RESPONSIVE_CSS[this.responsive] : {}),
        ...(!this.isImgLoaded && hasPlaceholder ? IMAGE_WITH_PLACEHOLDER_CSS[IMAGE_CLASSES.LOADING] : {})
      }

      return (
        <img 
          attrs={this.$attrs}
          src={src}
          loading={this.hasLazyLoading ? LAZY_LOADING : null}
          class={imgClass}
          onLoad={this.load}
          style={style}
        />
      )
    }, 
    renderComp(children) {
      this.setup(this.$attrs)
      const responsiveModeNoSize = this.responsive && (this.size.width === undefined || this.size.height === undefined)
      const lazyModeInvisible = this.hasLazyLoading && !this.visible

      const options = this.computeURLOptions()
      const src = responsiveModeNoSize || lazyModeInvisible ? '' : this.cloudinary.image.url(this.publicId, options)

      const cldPlaceholder = getCldPlaceholder(children)
      const cldPlaceholderType = cldPlaceholder ? (cldPlaceholder.componentOptions?.propsData?.type || 'blur') : ''
      const placeholderType = cldPlaceholderType || this.placeholder
      const placeholderOptions = placeholderType ? computePlaceholder(placeholderType, options) : null

      if (!placeholderOptions) {
        return this.renderImageOnly(src)
      }

      const placeholder = responsiveModeNoSize ? '' : this.cloudinary.image.url(this.publicId, placeholderOptions)
      const displayPlaceholder = !this.isImgLoaded && placeholder

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
    },
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
} 
</script>
