import { ready } from "./ready";

export const mounted = {
  mixins: [ready],

  created() {
    // hold "ready" until mounted only in case of
    // potential CldTransformations
    // not created yet
    this.markReady(
      "mounted",
      !this.CldParentState &&
        (!this.$slots || !this.$slots.default || !this.$slots.default.length)
    );
  },

  mounted() {
    this.markReady("mounted", true);
  }
};
