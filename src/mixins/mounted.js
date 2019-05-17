import { ready } from "./ready";

/**
 * A ready-check for if component
 * has been mounted,
 * so it is true that
 * all current children-modifier components
 * like CldTransformation
 * had been initialized already
 */
export const mounted = {
  mixins: [ready],

  created() {
    this.addReadyCheck("mounted");

    /*
     * hold "ready" until mounted only in case of
     * potential children-modifiers
     * not created yet
     * either as children of this element
     * or children of parent context
     */
    if (
      !this.cldParentState &&
      (!this.$slots || !this.$slots.default || !this.$slots.default.length)
    ) {
      this.markReadyCheck("mounted");
    }
  },

  mounted() {
    this.markReadyCheck("mounted");
  }
};
