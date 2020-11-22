<script>
import { Cloudinary } from "cloudinary-core";
import { setup } from '../../mixins/setup';
import { compute } from '../../mixins/compute';
import { register } from '../../mixins/registerTransformation'
import { extendOptions } from '../../helpers/computeOptions'
import { getCldPoster } from '../../helpers/findComponent'
import { lazy } from "../../mixins/lazy";
import { COMPONENTS } from '../../constants'

const defaultSourceTypes = Cloudinary.DEFAULT_VIDEO_SOURCE_TYPES.reduce((types, type) => ({ ...types, [type]: {} }), {})
/**
 * Deliver videos and specify video transformations using the `cld-video` (CldVideo) element,
 * which automatically generates an HTML5 video tag including the URL sources for the main formats
 * supported by web browsers (webm, mp4 and ogv by default), as well as a poster thumbnail image,
 * which is automatically generated from a frame in the video.
 * Browsers can automatically select and play the video format that they best support,
 * and the video files are created dynamically when first accessed by your users.
 *
 * You can optionally include `cld-transformation` components to define transformations to apply to the delivered video.
 *
 * For more information see
 * <a href="https://cloudinary.com/documentation/vue_video_manipulation#cldvideo_component" target="_blank">
 * cld-video component</a> and
 * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#embedding_videos_in_web_pages"
 * target="_blank">embedding videos in web pages</a>
 */
export default {
  name: COMPONENTS.CldVideo,
  mixins: [setup, compute, lazy, register],
  provide() {
    return {
      registerPoster: this.registerPoster,
      getConfig: () => this.cloudinary?.config() || {},
      getOptions: () => {
        if (this.poster && (typeof this.poster === 'string')) return {}

        return {
          publicId: this.publicId,
          ...(this.poster || {})
        }
      }
    }
  },
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
    },
    poster: {
      type: [String, Object, Array],
    }
  },
  data() {
    return {
      posterUrl: '',
      cloudinary: null,
    };
  },
  methods: {
    registerPoster(posterUrl) {
      this.posterUrl = posterUrl
    },
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
          src: this.cloudinary.video_url(this.publicId, this.toSnakeCase(srcOptions))
        })
      }
      return sources
    },
    getPosterUrl() {
      const isPosterAnUrl = (typeof this.poster) === 'string'
      if (isPosterAnUrl) return this.poster

      const hasInlinePosterOptions = this.poster && !isPosterAnUrl
      const options = hasInlinePosterOptions ? this.poster : {}

      return this.cloudinary.url(this.poster?.publicId || this.publicId, this.toSnakeCase(options))
    }
  },
  render(h) {
    if (!this.publicId) return null

    const children = this.$slots.default || []

    const cldPoster = getCldPoster(children)
    const hasExtraTransformations = children.length > 1 || (children.length === 1 && !cldPoster)

    /* Render the children first to get the extra transformations (if there is any) */
    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h(
        "div", {
          attrs: this.attrs
        },
        this.$slots.default
      )
    }

    this.setup(this.$attrs)

    const sources = this.getSources()

    const poster = cldPoster ? this.posterUrl : this.getPosterUrl()

    return (
      <video attrs={this.$attrs} poster={poster}>
        { sources.map((source, index) => <source key={index} attrs={source} />)}
        { this.$slots.default }
      </video>
    )
  }
};
</script>
