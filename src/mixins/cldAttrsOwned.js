import { equal } from "../utils";
import {
  normalizeConfiguration,
  normalizeTransformation
} from "../helpers/attributes";
import { cldAttrs } from "./cldAttrs";
import { combineOptions } from "../helpers/combineOptions";

/**
 * In order to maintain merging order
 * of config+transformation sources (context+own+modifiers)
 * create a sub-State
 * of components main CombineState instance
 * and submit components config+transformation
 */
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

  watch: {
    cldAttributes(cldAttributes) {
      const prev = this.ownState.get();
      const current = cldAttributes;
      if (!equal(prev, current)) {
        this.ownState.next(current);
      }
    }
  },

  created() {
    this.markReadyCheck("cldAttrsOwned");

    this.ownState = this.cldAttrsState.spawn();
    this.ownState.next(this.cldAttributes);
  },

  destroyed() {
    this.ownState.complete();
  }
};
