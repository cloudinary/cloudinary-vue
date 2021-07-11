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
      // Automatic poster, when no specific poster properties are passed.
      if (!this.poster) {
        // Take the video URL and render it as an image, applying all child transformations
        // In a case like this: <cld-video width="100"/> the width config is already populated in the Cloudinary object
        // All we need to do is apply the child/chained transformations
        return this.cloudinary.url(this.publicId, this.toSnakeCase({
          transformation: this.extraTransformations || [],
          format: 'jpg', // The video publicId is a video, we need to change it to jpg for the poster
          resourceType: 'video' // the default resourceType is image, we need to ensure video is used.
        }))
      }

      // If poster is directly a string, we just return it
      // <cld-video poster="my/path/to/poster.jpg"/>
      if (typeof this.poster === 'string') {
        return this.poster
      }

      // If poster is used as a child component
      // <cld-video> <cld-poster publicId="sample" /></>cld-video>
      // This is treated like a regular transformation
      // All poster properties are used to calculate the transformation
      // We ignore child transformations, and only use what was explciitly provided.
      if (this.poster && this.poster.publicId) {
        // const cldURLOptions = hasInlinePosterOptions ? this.poster : this.extraTransformations
        return this.cloudinary.url(this.poster.publicId, this.toSnakeCase(this.poster))
      }

      // In all other cases, return an empty string
      return '';
    }
  },
  mounted() {
    this.$videoElement = this.$refs.videoElement;
  },
  created() {
    this.setup(this.$attrs);
  },
  render(h) {
    if (!this.publicId) return null

    const children = this.$slots.default || []
    const cldPoster = getCldPoster(children);
    const sources = this.getSources();
    const poster = cldPoster ? this.posterUrl : this.getPosterUrl();

    return (
      <video autoplay={this.$attrs.autoplay} muted={this.$attrs.muted} attrs={this.$attrs} poster={poster} ref="videoElement">
        { sources.map((source, index) => <source key={index} attrs={source} />)}
        { this.$slots.default }
      </video>
    )
  }
};
</script>
