/**
 * Injects cloudinary parent State (stateful stream)
 */
export const cldChild = {
  inject: {
    cldParentState: {
      default() {
        return this.CldGlobalContextState;
      }
    }
  }
};
