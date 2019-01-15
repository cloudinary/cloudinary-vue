<template>
  <span v-if="$slots.default" class="cld-transformation">
    <slot/>
  </span>
</template>

<script>
import { pick, merge, shallowEqual } from "../utils";
import { CombinedState } from "../CombinedState";
import { configuration, transformation } from "../attributes";

/**
 * Cloudinary transformation modifier
 */
export default {
  name: "CLDTransformation",
  inheritAttrs: false,
  props: {},
  inject: {
    CLDContextState: {
      default() {
        return null;
      }
    }
  },
  methods: {
    getOwnAttrs() {
      return pick(this.$attrs, transformation);
    }
  },
  created() {
    if (this.CLDContextState) {
      const current = this.getOwnAttrs();
      this.ownState = this.CLDContextState.spawn();
      console.log("Transformation:POST", JSON.stringify(current));
      this.ownState.next(current);
    } else {
      console.warn("Transformation:NO_PARENT");
    }
  },
  updated() {
    if (this.ownState) {
      const prev = this.ownState.get();
      const current = this.getOwnAttrs();
      if (!shallowEqual(prev, current)) {
        console.log("Transformation:POST", JSON.stringify(current));
        this.ownState.next(current);
      }
    }
  },
  destroyed() {
    if (this.ownState) {
      this.ownState.complete();
    }
  }
};
</script>

<style lang="scss">
.cld-transformation {
  display: none;
}
</style>
