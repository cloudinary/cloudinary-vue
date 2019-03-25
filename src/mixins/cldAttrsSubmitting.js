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
    if (!this.CldParentState) {
      throw new Error(
        "This component has to have a Cloudinary parent that can receive it's attributes"
      );
    }

    this.addReadyCheck("cldAttrsSubmitting");

    this.submitter = this.CldParentState.spawn();
    this.submitterSub = this.cldAttrsState.subscribe({
      next: v => {
        this.submitter.next(v);
        this.markReadyCheck("cldAttrsSubmitting");
      }
    });
  },

  destroyed() {
    if (this.submitterSub) {
      this.submitterSub();
    }
    if (this.submitter) {
      this.submitter.complete();
    }
  }
};
