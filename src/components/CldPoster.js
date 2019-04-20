import { normalizeObject, merge } from "../utils";
import { cldAttrsSubmitting } from "../mixins/cldAttrsSubmitting";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";

/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */
export default {
  name: "CldPoster",
  render(h) {
    if (!this.$slots || !this.$slots.default) {
      return null;
    }
    return h("span", { class: "cld-poster" }, this.$slots.default);
  },
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: { type: String }
  },
  inject: {
    CldParentState: { from: "CldPosterState" }
  },
  computed: {
    attributes() {
      return normalizeObject(
        merge(
          {
            publicId: this.publicId
          },
          this.$attrs
        )
      );
    }
  }
};