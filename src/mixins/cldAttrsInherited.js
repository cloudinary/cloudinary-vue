import { cldAttrs } from "./cldAttrs";
import { cldChild } from "./cldChild";

/**
 * Ties cloudinary parent element state
 * with components own
 */
export const cldAttrsInherited = {
  mixins: [cldAttrs, cldChild],

  created() {
    this.addReadyCheck("cldAttrsOwned");

    if (this.cldParentState) {
      this.contextState = this.cldAttrsState.spawn();
      this.contextStateSub = this.cldParentState.subscribe({
        next: v => {
          this.contextState.next(v);
          this.markReadyCheck("cldAttrsOwned");
        }
      });
    } else {
      this.markReadyCheck("cldAttrsOwned");
    }
  },

  destroyed() {
    if (this.contextStateSub) {
      this.contextStateSub();
    }
    if (this.contextState) {
      this.contextState.complete();
    }
  }
};
