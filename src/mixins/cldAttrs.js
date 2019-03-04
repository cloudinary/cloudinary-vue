import { CombinedState } from "../reactive/CombinedState";
import { combineOptions } from "../helpers/combineOptions";
import { ready } from "./ready";

/**
 * Creates a components own CombinedState
 * and posts its changes
 * into components data
 */
export const cldAttrs = {
  mixins: [ready],

  provide() {
    return {
      CldParentState: this.cldAttrsState
    };
  },

  data() {
    const cldAttrsState = new CombinedState(combineOptions);
    return {
      cldAttrsState,
      cldAttrs: cldAttrsState.get()
    };
  },

  created() {
    this.addReadyCheck("cldAttrs");
    this.cldAttrsStateSub = this.cldAttrsState.subscribe({
      next: v => {
        this.cldAttrs = v;
        this.markReadyCheck("cldAttrs");
      }
    });
  },

  destroyed() {
    this.cldAttrsStateSub();
  }
};
