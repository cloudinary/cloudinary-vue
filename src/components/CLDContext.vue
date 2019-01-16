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
  props: {},
  inject: {
    CLDContextState: {
      default() {
        return this.CLDGlobalContextState ? this.CLDGlobalContextState : null;
      }
    }
  },
  provide() {
    return {
      CLDContextState: this.combinedState
    };
  },
  methods: {
    getOwnAttrs() {
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
      allAttrsCombined: combinedState.get()
    };
  },
  created() {
    if (this.CLDContextState) {
      this.contextState = this.combinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          // console.log("Context:parent", JSON.stringify(v));
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.combinedState.spawn();
    const current = this.getOwnAttrs();
    // console.log("Context:own", JSON.stringify(current));
    this.ownState.next(current);

    this.combinedStateSub = this.combinedState.subscribe({
      next: v => {
        // console.log("Context:all", JSON.stringify(v));
        this.allAttrsCombined = v;
      }
    });
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getOwnAttrs();
    if (!shallowEqual(prev, current)) {
      // console.log("Context:own", JSON.stringify(current));
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
