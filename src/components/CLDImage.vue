<template>
  <picture class="cld-image">
    <img v-if="ready" v-bind="imageAttrs">
    <slot/>
  </picture>
</template>

<script>
import {
  Cloudinary,
  Configuration,
  Transformation,
  Util
} from "cloudinary-core";
import { pick, merge, shallowEqual } from "../utils";
import { CombinedState } from "../CombinedState";
import { normalizeTransformation, normalizeConfiguration } from "../attributes";

/**
 * Cloudinary image element
 */
export default {
  name: "CLDImage",
  props: {
    /** ID of your media file */
    publicId: { type: String, default: "", required: true }
  },
  inject: {
    CLDContextState: {
      default() {
        return null;
      }
    }
  },
  provide() {
    return {
      CLDContextState: this.combinedState
    };
  },
  data() {
    const combinedState = new CombinedState();
    return {
      combinedState,
      combinedStateValue: combinedState.get(),
      ready: false
    };
  },
  methods: {
    getConfig() {
      return merge(
        normalizeConfiguration(this),
        normalizeConfiguration(this.$attrs),
        normalizeTransformation(this),
        normalizeTransformation(this.$attrs)
      );
    }
  },
  computed: {
    imageAttrs() {
      if (!this.ready) {
        return {};
      }
      const attrs = this.combinedStateValue;
      const cfg = merge(attrs, Util.withSnakeCaseKeys(attrs));
      console.log("Image:attrs", JSON.stringify(cfg));
      try {
        const htmlAttrs = Transformation.new(cfg).toHtmlAttributes();
        const src = Cloudinary.new(cfg).url(this.publicId, cfg);
        return {
          ...htmlAttrs,
          src
        };
      } catch (e) {
        console.error("image attributes generation error");
        console.error(e);
        return {};
      }
    }
  },
  created() {
    if (this.CLDContextState) {
      this.contextState = this.combinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          console.log("Image:parent", JSON.stringify(v));
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.combinedState.spawn();
    const current = this.getConfig();
    console.log("Image:own", JSON.stringify(current));
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        console.log("Image:all", JSON.stringify(v));
        this.combinedStateValue = v;
      }
    });

    if (!this.$slots || !this.$slots.default || !this.$slots.default.length) {
      this.ready = true;
    }
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getConfig();
    if (!shallowEqual(prev, current)) {
      console.log("Image:own", JSON.stringify(current));
      this.ownState.next(current);
    }
  },
  mounted() {
    if (!this.ready) {
      this.ready = true;
    }
  },
  destroyed() {
    console.log("Image:destroyed");
    this.combinedStateSub();
    this.ownState.complete();

    if (this.contextStateSub) {
      this.contextStateSub();
    }
    if (this.contextState) {
      this.contextState.complete();
    }
  }
};
</script>

<style lang="scss">
</style>
