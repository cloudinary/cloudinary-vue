import { equal } from "../utils";
import {
  normalizeConfiguration,
  normalizeTransformation
} from "../helpers/attributes";
import { cldAttrs } from "./cldAttrs";
import { combineOptions } from "../helpers/combineOptions";

export const cldAttrsOwned = {
  mixins: [cldAttrs],

  computed: {
    attributes() {
      return this.$attrs;
    },
    cldAttributes() {
      const configuration = normalizeConfiguration(this.attributes);
      const transformation = normalizeTransformation(this.attributes);
      return combineOptions({
        publicId: this.attributes.publicId,
        configuration,
        transformation
      });
    }
  },

  created() {
    this.markReady("cldAttrsOwned", true);

    this.ownState = this.cldAttrsState.spawn();
    this.ownState.next(this.cldAttributes);
  },

  updated() {
    const prev = this.ownState.get();
    const current = this.cldAttributes;
    if (!equal(prev, current)) {
      this.ownState.next(current);
    }
  },

  destroyed() {
    this.ownState.complete();
  }
};
