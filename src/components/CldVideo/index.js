import { Cloudinary } from "cloudinary-core";
import { setup } from '../../mixins/setup';
import { compute } from '../../mixins/compute';
import { lazy } from '../../mixins/lazy';
import { register } from '../../mixins/register';
import { extendOptions, isCldPoster } from "../../cloudinary/helpers";
import { COMPONENTS } from '../../constants';

const defaultSourceTypes = Cloudinary.DEFAULT_VIDEO_SOURCE_TYPES.reduce((types, type) => ({ ...types, [type]: {} }), {})

export default {
  name: COMPONENTS.CldVideo,
  mixins: [setup, compute, lazy, register],
  props: {
    /**
     * The unique identifier of an uploaded video.
     */
    publicId: { type: String, default: "", required: true },
    /**
     * The video source types to include in the HTML5 tag, where the type is mapped to the mime type.
     * You can also add a specific transformation for each specified video format by adding a transformation struct. Example:
     *
     * `<CldVideo :sourceTypes="{ mp4: { quality: 10 } }" />`
     */
    sourceTypes: {
      type: Object,
      default: () => defaultSourceTypes,
      validator: value => typeof value !== 'Object'
    }
  },
  data() {
    return {
      cloudinary: null,
      posterUrl: ''
    }
  },
  provide() {
    return {
      registerPoster: this.registerPoster,
      videoPublicId: this.publicId
    }
  },
  methods: {
    getSources() {
      const options = this.computeURLOptions()
      const sources = []

      for(let type in this.sourceTypes) {
        const typeOptions = this.sourceTypes[type]
        const formatType = type === "ogv" ? "ogg" : type

        const srcOptions = extendOptions(options, typeOptions)
        srcOptions.format = type

        sources.push({
          ...typeOptions,
          mimeType: `video/${formatType}`,
          type: `video/${formatType}`,
          src: this.cloudinary.video.url(this.publicId, srcOptions)
        })
      }
      
      return sources
    },
    registerPoster(posterUrl) {
      this.posterUrl = posterUrl
    },
  },
  render(h) {
    if (!this.publicId) return null
        
    const children = this.$slots.default || []
    const hasExtraTransformations = children.length > 1 || (children.length === 1 && !isCldPoster(children[0]))

    /* Render the children first to get the extra transformations (if there is any) */
    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h(
        "div", {
          attrs: this.attrs
        },
        this.$slots.default
      );
    }

    this.setup(this.$attrs)

    const sources = this.getSources()

    //Get poster
    return (
      <video attrs={this.$attrs} poster={this.posterUrl || this.$attrs.poster}>
        { sources.map((source, index) => <source key={index} attrs={source} />)}
        { this.$slots.default }
      </video>
    )
  }
}