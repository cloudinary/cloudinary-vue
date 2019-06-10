export const inContext = {
  inject: {
    cldParentState: {
      default() {
        return this.cldGlobalContextState;
      }
    }
  },

  data() {
    return { parentOptions: {} };
  },

  created() {
    if (this.cldParentState) {
      this.cldParentStateSubCancel = this.cldParentState.subscribe({
        next: options => {
          this.parentOptions = options;
        }
      });
    }
  },

  destroyed() {
    if (this.cldParentStateSubCancel) {
      this.cldParentStateSubCancel();
    }
  }
};
