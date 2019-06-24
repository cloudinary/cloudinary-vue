/**
 * This ensures injection of inherited configuration
 * and application of updates of those
 * either from parent CldContext or plugin options
 */
export const inContext = {
  inject: {
    cldOptionsState: {
      default() {
        return this.cldGlobalContextState;
      }
    }
  },

  data() {
    return { cldOptions: {} };
  },

  created() {
    if (this.cldOptionsState) {
      this.cldOptionsStateSubCancel = this.cldOptionsState.subscribe({
        next: options => {
          this.cldOptions = options;
        }
      });
    }
  },

  destroyed() {
    if (this.cldOptionsStateSubCancel) {
      this.cldOptionsStateSubCancel();
    }
  }
};
