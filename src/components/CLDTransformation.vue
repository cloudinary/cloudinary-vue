<template>
  <span v-if="$slots.default" class="cld-transformation">
    <slot/>
  </span>
</template>

<script>
import { shallowEqual } from "../utils";
import { normalizeTransformation } from "../helpers/attributes";

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
    },
    CLDImageState: {
      default() {
        return null;
      }
    },
    CLDVideoState: {
      default() {
        return null;
      }
    },
    CLDPosterStateOPosterTag: {
      default() {
        return null;
      }
    }
  },
  methods: {
    getOwnAttrs() {
      return normalizeTransformation(this.$attrs);
    }
  },
  created() {
    const parentState =
      this.CLDPosterStateOPosterTag ||
      this.CLDVideoState ||
      this.CLDImageState ||
      this.CLDContextState;
    if (parentState) {
      this.ownState = parentState.spawn();
      this.ownState.next(this.getOwnAttrs());
    } else {
      throw new Error(
        "CLDTransform without a CLDContext/CLDImage/CLDVideo parent"
      );
    }
  },
  updated() {
    if (this.ownState) {
      const prev = this.ownState.get();
      const current = this.getOwnAttrs();
      if (!shallowEqual(prev, current)) {
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
