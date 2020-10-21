import { setup } from '../../mixins/setup';
import { compute } from '../../mixins/compute';
import { lazy } from '../../mixins/lazy';
import { responsive } from '../../mixins/responsive'
import { computePlaceholder, getCldPlaceholder, isCldPlaceholder } from '../../cloudinary/helpers'
import { 
  A11Y_TRANSFORMS, 
  COMPONENTS,
  PLACEHOLDER_OPTIONS, 
  RESPONSIVE_CSS, 
  IMAGE_CLASSES, 
  PLACEHOLDER_CLASS, 
  IMAGE_WITH_PLACEHOLDER_CSS, 
  LAZY_LOADING, 
  CLD_IMAGE_WRAPPER_CLASS
} from '../../constants';

export default {
  name: COMPONENTS.CldImage,
  mixins: [setup, compute, lazy, responsive],
  data() {
    return {
      isImgLoaded: false,
      extraTransformations: [],
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
      validator: value => !value || !!A11Y_TRANSFORMS[value]
    },
    /**
     * Type of placeholder
     * @deprecated
     */
    placeholder: {
      type: String,
      default: '',
      validator: value => !value || !!PLACEHOLDER_OPTIONS[value]
    },
  },
  methods: {
    load() {
      this.isImgLoaded = true
    },
    registerTransformation(options) {
      this.extraTransformations.push(options);
    },
    renderImageOnly(options, hasPlaceholder = false) {
      // const hasLazyOrResponsive = (this.responsive && !this.size.width && !this.size.height) || (!this.hasLazyLoading && !this.visible)

      const src = this.cloudinary.image.url(this.publicId, options)
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
    renderPlaceholder(options) {
      const placeholder = this.cloudinary.image.url(this.publicId, options)
      const displayPlaceholder = !this.isImgLoaded && placeholder

      return displayPlaceholder ? (
        <img
          src={placeholder}
          attrs={this.$attrs}
          class={PLACEHOLDER_CLASS}
          style={IMAGE_WITH_PLACEHOLDER_CSS[PLACEHOLDER_CLASS]}
        />
      ) : null
    },
    renderComp(children) {
      this.setup(this.$attrs)

      const options = this.computeURLOptions()
      
      const cldPlaceholder = getCldPlaceholder(children)
      const cldPlaceholderType = cldPlaceholder ? (cldPlaceholder.componentOptions?.propsData?.type || 'blur') : ''
      const placeholderType = cldPlaceholderType || this.placeholder
      const placeholderOptions = placeholderType ? computePlaceholder(placeholderType, options) : null

      if (!placeholderOptions) {
        return this.renderImageOnly(options)
      }

      const Placeholder = this.renderPlaceholder(placeholderOptions)

      return (
        <div class={CLD_IMAGE_WRAPPER_CLASS}>
          { this.renderImageOnly(options, true) }
          { Placeholder }
        </div>
      )
    },
  },
  provide() {
    return {
      registerTransformation: this.registerTransformation,
    }
  },
  render() {
    if (!this.publicId) return null

    const children = this.$slots.default || []
    const hasExtraTransformations = children.length > 1 || (children.length === 1 && !isCldPlaceholder(children[0]))

    /* Render the children first to get the extra transformations (if there is any) */
    if (hasExtraTransformations && !this.extraTransformations.length) {
      return (
        <div> {this.$slots.default} </div>
      )
    }

    /* Start listening to responsive if the component is being rendered */
    this.responsive && this.updateSizeObservation();

    /** Start lazy loading */
    (this.lazy || this.loading) && this.updateVisibilityObservation()

    return this.renderComp(children)
  }
}