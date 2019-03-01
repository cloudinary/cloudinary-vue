import { CombinedState } from "../reactive/CombinedState";
import { combineOptions } from "../helpers/combineOptions";
import { ready } from "./ready";

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
    this.markReady("cldAttrs", false);
    this.cldAttrsStateSub = this.cldAttrsState.subscribe({
      next: v => {
        // console.log(this.$options._componentTag, "cldAttrs", v);
        this.cldAttrs = v;
        this.markReady("cldAttrs", true);
        // this.$forceUpdate();
      }
    });
  },

  destroyed() {
    this.cldAttrsStateSub();
  }
};
