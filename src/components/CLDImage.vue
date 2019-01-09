<template>
  <img v-bind="imageAttrs">
</template>

<script>
import {
  Cloudinary,
  Configuration,
  Transformation,
  Util
} from "cloudinary-core";
import { pick, merge } from "../utils";
import { CompoundState } from "../CompoundState";

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
  // provide: {
  //   getCLDImageState() {
  //     return this.compoundState;
  //   }
  // },
  data() {
    const compoundState = new CompoundState();
    return {
      compoundState,
      compoundStateValue: {}
    };
  },
  methods: {
    getConfig() {
      return pick(this, ["cloudName", "publicId"]);
    }
  },
  computed: {
    imageAttrs() {
      const cfg = merge(
        {},
        this.compoundStateValue,
        Util.withSnakeCaseKeys(this.compoundStateValue)
      );
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
    this.ownState = this.compoundState.spawn();
    const current = this.getConfig();
    this.ownState.next(current);

    this.compoundStateSub = this.compoundState.subscribe({
      next: v => {
        this.compoundStateValue = v;
      }
    });

    if (this.CLDContextState) {
      this.contextState = this.compoundState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          this.contextState.next(v);
        }
      });
    }
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getConfig();
    if (!shallowEqual(prev, current)) {
      this.ownState.next(current);
    }
  },
  destroyed() {
    this.compoundStateSub();
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
