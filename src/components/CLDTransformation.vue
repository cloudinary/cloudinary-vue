<template></template>

<script>
import { pick, merge, shallowEqual } from "../utils";
import { CombinedState } from "../CombinedState";
import { configuration, transformation } from "../attributes";

/**
 * Cloudinary transformation modifier
 */
export default {
  name: "CLDTransformation",
  props: {},
  inject: {
    CLDContextState: {
      default() {
        return null;
      }
    }
  },
  methods: {
    getConfig() {
      return merge(
        pick(this, configuration),
        pick(this.$attrs, transformation)
      );
    }
  },
  created() {
    if (this.CLDContextState) {
      const current = this.getConfig();
      this.ownState = this.CLDContextState.spawn();
      this.ownState.next(current);
    }
  },
  updated() {
    if (this.ownState) {
      const prev = this.ownState.get();
      const current = this.getConfig();
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
</style>
