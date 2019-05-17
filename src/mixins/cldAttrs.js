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
      cldParentState: this.cldAttrsState
    };
  },

  data() {
    return {
      cldAttrs: {}
    };
  },

  beforeCreate() {
    this.cldAttrsState = new CombinedState(combineOptions);
  },

  created() {
    this.addReadyCheck("cldAttrs");
    this.cldAttrsStateSub = this.cldAttrsState.subscribe({
      next: cldAttrs => {
        this.cldAttrs = cldAttrs;
        this.markReadyCheck("cldAttrs");
      }
    });
  },

  destroyed() {
    this.cldAttrsStateSub();
  }
};
