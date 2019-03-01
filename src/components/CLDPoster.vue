<template>
  <span v-if="$slots.default" class="cld-poster">
    <slot/>
  </span>
</template>

<script>
import { normalizeObject, merge } from "../utils";
import { cldAttrsSubmitting } from "../mixins/cldAttrsSubmitting";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";

/**
 * Cloudinary poster for video element
 */
export default {
  name: "CldPoster",
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  props: {
    /**
     * ID of your media file.
     * Notice that unlike CldVideo, CldImage and CldPicture
     * this component does not require you to specify publicId.
     * In case of it missing, publicId of parent CldVideo will be used
     * alongside other configuration options.
     */
    publicId: { type: String, default: "" }
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
</script>

<style lang="scss">
.cld-poster {
  display: none;
}
</style>
