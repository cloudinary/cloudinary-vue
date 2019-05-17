<template>
  <span v-if="$slots.default" class="cld-poster">
    <slot />
  </span>
</template>

<script>
import { compact, merge } from "../utils";
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
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: { type: String }
  },
  inject: {
    cldParentState: { from: "cldPosterState" }
  },
  computed: {
    attributes() {
      return compact(
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
</script>

<style lang="scss">
.cld-poster {
  display: none;
}
</style>
