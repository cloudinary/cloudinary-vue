<template>
  <div class="cld-context" v-bind="htmlAttributes">
    <slot />
  </div>
</template>

<script>
import { normalizeRest } from "../helpers/attributes";
import { mounted } from "../mixins/mounted";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CldContext",
  inheritAttrs: false,
  mixins: [mounted, cldAttrsInherited, cldAttrsOwned],
  props: {},
  computed: {
    htmlAttributes() {
      return normalizeRest(this.$attrs);
    }
  }
};
</script>

<style>
.cld-context {
  display: contents;
}
</style>
