<template>
  <div class="cld-context">
    <slot/>
  </div>
</template>

<script>
import { pick } from "../utils";
import { CompoundState } from "../CompoundState";

export default {
  name: "CLDContext",
  props: {
    /** Your cloudinary account name */
    cloudName: { type: String, default: "" }
  },
  provide() {
    return {
      CLDContextState: this.compoundState
    };
  },
  methods: {
    getConfig() {
      return pick(this, ["cloudName"]);
    }
  },
  data() {
    const compoundState = new CompoundState();
    return {
      compoundState,
      compoundStateValue: {}
    };
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
  }
};
</script>

<style>
.cld-context {
  display: inline-flex;
  display: contents;
}
</style>
