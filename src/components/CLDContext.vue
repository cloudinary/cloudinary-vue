<template>
  <div class="cld-context">
    <slot/>
  </div>
</template>

<script>
import { pick, shallowEqual } from "../utils";
import { CombinedState } from "../CombinedState";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CLDContext",
  props: {
    /** Your cloudinary account name */
    cloudName: { type: String, default: "" }
  },
  provide() {
    return {
      CLDContextState: this.combinedState
    };
  },
  methods: {
    getConfig() {
      return pick(this, ["cloudName"]);
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
    this.ownState = this.combinedState.spawn();
    const current = this.getConfig();
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        this.combinedStateValue = v;
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
    this.combinedStateSub();
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
