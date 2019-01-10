<template>
  <div class="cld-context">
    <slot/>
  </div>
</template>

<script>
import { pick, shallowEqual, merge, normalize } from "../utils";
import { CombinedState } from "../CombinedState";
import { normalizeConfiguration } from "../attributes";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CLDContext",
  props: {
    /** Your cloudinary account name */
    cloudName: { type: String },
    /** TODO */
    apiKey: { type: String },
    /** TODO */
    apiSecret: { type: String },
    /** TODO */
    callback: { type: String },
    /** TODO */
    cdnSubdomain: { type: String },
    /** TODO */
    cname: { type: String },
    /** TODO */
    privateCdn: { type: String },
    /** TODO */
    protocol: { type: String },
    /** TODO */
    resourceType: { type: String },
    /** TODO */
    responsive: { type: String },
    /** TODO */
    responsiveClass: { type: String },
    /** TODO */
    responsiveUseBreakpoints: { type: String },
    /** TODO */
    responsiveWidth: { type: String },
    /** TODO */
    roundDpr: { type: String },
    /** TODO */
    secure: { type: String },
    /** TODO */
    secureCdnSubdomain: { type: String },
    /** TODO */
    secureDistribution: { type: String },
    /** TODO */
    shorten: { type: String },
    /** TODO */
    type: { type: String },
    /** TODO */
    uploadPreset: { type: String },
    /** TODO */
    urlSuffix: { type: String },
    /** TODO */
    useRootPath: { type: String },
    /** TODO */
    version: { type: String }
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
  methods: {
    getConfig() {
      return merge(
        normalizeConfiguration(this),
        normalizeConfiguration(this.$attrs)
      );
    }
  },
  data() {
    const combinedState = new CombinedState();
    return {
      combinedState,
      combinedStateValue: combinedState.get()
    };
  },
  created() {
    if (this.CLDContextState) {
      this.contextState = this.combinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          console.log("Context:parent", JSON.stringify(v));
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.combinedState.spawn();
    const current = this.getConfig();
    console.log("Context:own", JSON.stringify(current));
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        console.log("Context:all", JSON.stringify(v));
        this.combinedStateValue = v;
      }
    });
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getConfig();
    if (!shallowEqual(prev, current)) {
      console.log("Context:own", JSON.stringify(current));
      this.ownState.next(current);
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

<style>
.cld-context {
  display: inline-flex;
  display: contents;
}
</style>
