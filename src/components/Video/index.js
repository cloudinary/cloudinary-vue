import { setup } from '../../mixins/setup';
import { compute } from '../../mixins/compute';
import { lazy } from '../../mixins/lazy';

export default {
  name: "CldVideo",
  mixins: [setup, compute, lazy],
  props: {
    /**
     * The unique identifier of an uploaded video.
     */
    publicId: { type: String, default: "", required: true },
    /**
     * An ordered array of the video source types to include in the HTML5 tag, where the type is mapped to the mime type.
     * You can also add a specific transformation for each specified video format by adding a transformation struct. Example:
     *
     * `<CldVideo :sourceTypes="{ mp4: { quality: 10 } }" />`
     */
    sourceTypes: {
      type: Object,
      default: () => Cloudinary.DEFAULT_VIDEO_PARAMS.source_types.reduce((currSrc, type) => ({ ...currSrc, [type]: {} }), {})
    }
  },
  methods: {
    getSources() {
      if (this.hasLazyLoading && !this.visible) {
        return []
      }

      
    }
  },
  render() {
    this.setup(this.$attrs)
    const options = this.computeURLOptions()


    (this.lazy || this.loading) && this.updateVisibilityObservation()

    //Get poster
    //Get transformation
    //Get context
    return (
      <video attrs={this.$attrs} poster={this.posterUrl}>
        {/* <source v-for="(source, index) in sources" :key="index" v-bind="source"/> */}
      </video>
    )
  }
}