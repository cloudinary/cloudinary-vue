<template>
  <span v-if="$slots.default" class="cld-transformation">
    <slot/>
  </span>
</template>

<script>
import { equal, omit } from "../utils";
import { normalizeTransformation } from "../helpers/attributes";
import { combineOptions } from "../helpers/combineOptions";

import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsSubmitting } from "../mixins/cldAttrsSubmitting";

/**
 * Cloudinary transformation modifier
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

<style lang="scss">
.cld-transformation {
  display: none;
}
</style>
