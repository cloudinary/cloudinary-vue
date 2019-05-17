import { cldAttrs } from "./cldAttrs";
import { cldChild } from "./cldChild";

/**
 * Modify cloudinary parent CombinedState
 * with its own config+transformations
 * through dedicated State instance
 */
export const cldAttrsSubmitting = {
  mixins: [cldAttrs, cldChild],

  created() {
    if (!this.cldParentState) {
      throw new Error(
        "This component has to have a Cloudinary parent that can receive it's attributes"
      );
    }

    this.addReadyCheck("cldAttrsSubmitting");

    this.cldAttrsSubmittingSubmitter = this.cldParentState.spawn();
    this.cldAttrsSubmittingSubmitterCancel = this.cldAttrsState.subscribe({
      next: v => {
        this.cldAttrsSubmittingSubmitter.next(v);
        this.markReadyCheck("cldAttrsSubmitting");
      }
    });
  },

  destroyed() {
    if (this.cldAttrsSubmittingSubmitterCancel) {
      this.cldAttrsSubmittingSubmitterCancel();
    }
    if (this.cldAttrsSubmittingSubmitter) {
      this.cldAttrsSubmittingSubmitter.complete();
    }
  }
};
