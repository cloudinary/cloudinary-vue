import { cldAttrs } from "./cldAttrs";
import { cldChild } from "./cldChild";

export const cldAttrsSubmitting = {
  mixins: [cldAttrs, cldChild],

  created() {
    if (!this.CldParentState) {
      throw new Error(
        "This component has to have a Cloudinary parent that can receive it's attributes"
      );
    }

    this.markReady("cldAttrsSubmitting", false);

    this.submitter = this.CldParentState.spawn();
    this.submitterSub = this.cldAttrsState.subscribe({
      next: v => {
        this.submitter.next(v);
        this.markReady("cldAttrsSubmitting", true);
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
