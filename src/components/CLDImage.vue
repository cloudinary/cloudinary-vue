<template>
  <picture>
    v-bind:class="{
    cld-image: true,
    cld-image-src: ready
    }"
    <img v-bind="imageAttrs">
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
import { configuration, transformation } from "../attributes";

/**
 * Cloudinary image element
 */
export default {
  name: "CLDImage",
  props: {
    /** Your cloudinary account name */
    cloudName: { type: String },
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
        pick(this, configuration),
        pick(this.$attrs, transformation)
      );
    }
  },
  computed: {
    imageAttrs() {
      if (!this.ready) {
        return {};
      }
      const attrs = pick(
        this.combinedStateValue,
        configuration.concat(transformation)
      );
      const cfg = merge(attrs, Util.withSnakeCaseKeys(attrs));
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
    this.ownState = this.combinedState.spawn();
    const current = this.getConfig();
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        this.combinedStateValue = v;
      }
    });

    if (this.CLDContextState) {
      this.contextState = this.combinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          this.contextState.next(v);
        }
      });
    }

    if (!this.$slots || !this.$slots.default || !this.$slots.default.length) {
      this.ready = true;
    }
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getConfig();
    if (!shallowEqual(prev, current)) {
      this.ownState.next(current);
    }
  },
  mounted() {
    if (!this.ready) {
      this.ready = true;
    }
  },
  destroyed() {
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
.cld-image {
  &:not(&-src) {
    display: none;
  }
}
</style>
