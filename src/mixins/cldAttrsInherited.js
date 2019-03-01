import { cldAttrs } from "./cldAttrs";
import { cldChild } from "./cldChild";

export const cldAttrsInherited = {
  mixins: [cldAttrs, cldChild],

  created() {
    this.markReady("cldAttrsOwned", false);

    if (this.CldParentState) {
      this.contextState = this.cldAttrsState.spawn();
      this.contextStateSub = this.CldParentState.subscribe({
        next: v => {
          this.contextState.next(v);
          this.markReady("cldAttrsOwned", true);
        }
      });
    } else {
      this.markReady("cldAttrsOwned", true);
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
