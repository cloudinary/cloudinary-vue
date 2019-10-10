<script>
import { normalizeTransformation, normalizeConfiguration } from "../../helpers/attributes";

/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */
export default {
  name: "CldPoster",
  inject: {
    registerPoster: {
      default: null
    }
  },
  provide() {
    return {
      registerTransformation: this.registerTransformation,
    }
  },
  data() {
    return {
      transformations: [],
    };
  },
  mounted() {
    if (this.registerPoster) {
      const posterAttrs = this.$attrs || {};
      const configuration = normalizeConfiguration(posterAttrs);
      const transformation = [ normalizeTransformation(posterAttrs), ...this.transformations];
      
      this.registerPoster({
        configuration,
        publicId: posterAttrs.publicId,
        transformation
      })
      // this.registerPoster({...(this.$attrs || {}), transformation: this.transformations });
    }
  },
  methods: {
    registerTransformation(transformation) {
      this.transformations = [...this.transformations, normalizeTransformation(transformation)];
    },
  },
  render(h) {
    return h(
      "div", {},
      this.$slots.default
    );
  }
};
</script>
