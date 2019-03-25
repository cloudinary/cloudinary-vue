/**
 * Injects cloudinary parent State (stateful stream)
 */
export const cldChild = {
  inject: {
    CldParentState: {
      default() {
        return this.CldGlobalContextState ? this.CldGlobalContextState : null;
      }
    }
  }
};
