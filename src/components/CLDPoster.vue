<template>
  <span v-if="$slots.default" class="cld-poster">
    <slot/>
  </span>
</template>

<script>
import { normalizeObject } from "../utils";
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
  name: "CldPoster",
  inheritAttrs: false,
  props: {
    /** ID of your media file */
    publicId: { type: String, default: "" }
  },
  inject: {
    CldContextState: {
      default() {
        return this.CldGlobalContextState ? this.CldGlobalContextState : null;
      }
    },
    CldPosterStateOfVideoTag: {},
    attrsCombinedState: { from: "CldPosterStateOfVideoTag" }
  },
  provide() {
    return {
      CldPosterStateOPosterTag: this.CldPosterStateOfVideoTag
    };
  },
  methods: {
    getOwnCldAttrs() {
      return normalizeObject({
        publicId: this.publicId ? this.publicId : undefined,
        configuration: normalizeConfiguration(this.$attrs),
        transformation: normalizeTransformation(this.$attrs)
      });
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
