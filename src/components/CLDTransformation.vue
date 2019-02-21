<template>
  <span v-if="$slots.default" class="cld-transformation">
    <slot/>
  </span>
</template>

<script>
import { equal, omit } from "../utils";
import { normalizeTransformation } from "../helpers/attributes";
import { combineOptions } from "../helpers/combineOptions";

/**
 * Cloudinary transformation modifier
 */
export default {
  name: "CldTransformation",
  inheritAttrs: false,
  props: {},
  inject: {
    CldContextState: {
      default() {
        return null;
      }
    },
    CldImageState: {
      default() {
        return null;
      }
    },
    CldVideoState: {
      default() {
        return null;
      }
    },
    CldPosterStateOPosterTag: {
      default() {
        return null;
      }
    }
  },
  methods: {
    getOwnAttrs() {
      return combineOptions(
        {
          transformation: {
            transformation: [
              omit(normalizeTransformation(this.$attrs), ["transformation"])
            ]
          }
        },
        {
          transformation: {
            transformation: [
              normalizeTransformation(this.$attrs).transformation
            ]
          }
        }
      );
    }
  },
  created() {
    const parentState =
      this.CldPosterStateOPosterTag ||
      this.CldVideoState ||
      this.CldImageState ||
      this.CldContextState;
    if (parentState) {
      this.ownState = parentState.spawn();
      this.ownState.next(this.getOwnAttrs());
    } else {
      throw new Error(
        "CldTransform without a CldContext/CldImage/CldVideo parent"
      );
    }
  },
  updated() {
    if (this.ownState) {
      const prev = this.ownState.get();
      const current = this.getOwnAttrs();
      if (!equal(prev, current)) {
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
