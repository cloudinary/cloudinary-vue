<script>
import { setup } from '../../mixins/setup';
import { register } from '../../mixins/registerTransformation';
import { compute } from '../../mixins/compute';
import { COMPONENTS } from '../../constants'

/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a direct child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */
export default {
  name: COMPONENTS.CldPoster,
  mixins: [ register, setup, compute ],
  inject: {
    registerPoster: {
      default: null
    },
    getConfig: {
      default: () => ({})
    },
    getOptions: {
      default: () => ({})
    }
  },
  props: {
    publicId: {
      type: String
    }
  },
  render(h) {
    const baseOptions = this.getOptions()
    const publicId = this.publicId || baseOptions.publicId

    if (!publicId || !this.registerPoster) return null

    const children = this.$slots.default || []
    const hasExtraTransformations = children.length > 0
    /* Render the children first to get the extra transformations (if there is any) */
    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h(
        "div", {},
        this.$slots.default
      );
    }

    this.setup({
      ...this.getConfig(),
      ...baseOptions,
      ...this.$attrs
    })

    const options = this.computeURLOptions(baseOptions)
    this.registerPoster(this.cloudinary.url(publicId, options))
    
    return null
  }
};
</script>
