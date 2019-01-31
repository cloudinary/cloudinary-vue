<template>
  <span v-if="$slots.default" class="cld-poster">
    <slot/>
  </span>
</template>

<script>
import { equal } from "../utils";
import {
  normalizeTransformation,
  normalizeConfiguration
} from "../helpers/attributes";

/**
 * Cloudinary poster for video element
 */
export default {
  name: "CLDPoster",
  inheritAttrs: false,
  props: {
    /** ID of your media file */
    publicId: { type: String, default: "", required: true }
  },
  inject: {
    CLDContextState: {
      default() {
        return this.CLDGlobalContextState ? this.CLDGlobalContextState : null;
      }
    },
    CLDPosterStateOfVideoTag: {}
  },
  provide() {
    return {
      CLDPosterStateOPosterTag: this.CLDPosterStateOfVideoTag
    };
  },
  methods: {
    getOwnAttrs() {
      return {
        publicId: this.publicId,
        configuration: normalizeConfiguration(this.$attrs),
        transformation: normalizeTransformation(this.$attrs)
      };
    }
  },
  created() {
    if (this.CLDContextState) {
      this.contextState = this.CLDPosterStateOfVideoTag.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.CLDPosterStateOfVideoTag.spawn();
    this.ownState.next(this.getOwnAttrs());
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getOwnAttrs();
    if (!equal(prev, current)) {
      this.ownState.next(current);
    }
  },
  destroyed() {
    this.ownState.complete();

    if (this.contextStateSub) {
      this.contextStateSub();
      this.contextState.complete();
    }
  }
};
</script>

<style lang="scss">
</style>
