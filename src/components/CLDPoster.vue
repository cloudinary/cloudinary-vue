<template>
  <span v-if="$slots.default" class="cld-poster">
    <slot/>
  </span>
</template>

<script>
import {
  normalizeTransformation,
  normalizeConfiguration
} from "../helpers/attributes";
import { BehaviourGroup } from "../behaviours/BehaviourGroup";
import { CombineWithContext } from "../behaviours/CombineWithContext";
import { CombineWithOwn } from "../behaviours/CombineWithOwn";

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
    CLDPosterStateOfVideoTag: {},
    attrsCombinedState: { from: "CLDPosterStateOfVideoTag" }
  },
  provide() {
    return {
      CLDPosterStateOPosterTag: this.CLDPosterStateOfVideoTag
    };
  },
  methods: {
    getOwnCLDAttrs() {
      return {
        publicId: this.publicId,
        configuration: normalizeConfiguration(this.$attrs),
        transformation: normalizeTransformation(this.$attrs)
      };
    }
  },
  created() {
    this.behaviours = new BehaviourGroup(
      { context: CombineWithContext, own: CombineWithOwn },
      this
    );

    this.behaviours.onCreated();
  },
  updated() {
    this.behaviours.onUpdated();
  },
  mounted() {
    this.behaviours.onMounted();
  },
  destroyed() {
    this.behaviours.onDestroyed();
  }
};
</script>

<style lang="scss">
</style>
