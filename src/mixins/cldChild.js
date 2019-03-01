export const cldChild = {
  inject: {
    CldParentState: {
      default() {
        return this.CldGlobalContextState ? this.CldGlobalContextState : null;
      }
    }
  }
};
