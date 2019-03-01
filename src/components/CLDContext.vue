<template>
  <div class="cld-context" v-bind="htmlAttributes">
    <slot/>
  </div>
</template>


<script>
import { CombinedState } from "../reactive/CombinedState";
import { normalizeConfiguration, normalizeRest } from "../helpers/attributes";
import { combineOptions } from "../helpers/combineOptions";
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
