<template>
  <span v-if="$slots.default" class="cld-transformation">
    <slot />
  </span>
</template>

<script>
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsSubmitting } from "../mixins/cldAttrsSubmitting";

/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldTransformation",
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  computed: {
    attributes() {
      return { transformation: this.$attrs };
    }
  }
};
</script>
