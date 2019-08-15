import {
  normalizeTransformation,
  normalizeConfiguration
} from "../helpers/attributes";
import { inContext } from "./inContext";
import { merge, compact } from "../utils";
import CldTransformation from "../components/CldTransformation";

/**
 * This extracts configuration and transformation options
 * from the element's own and inherited attributes
 */
export const withOptions = {
  mixins: [inContext],

  computed: {
    configuration() {
      return merge(
        this.cldOptions.configuration,
        normalizeConfiguration(this.$attrs)
      );
    },

    ownTransformation() {
      return normalizeTransformation(this.$attrs);
    },

    ownChildTransformations() {
      return this.$slots && this.$slots.default
        ? compact(
            this.$slots.default.map(child =>
              child.componentOptions &&
              child.componentOptions.Ctor.options.render ===
                CldTransformation.render
                ? normalizeTransformation(child.data.attrs)
                : null
            )
          )
        : [];
    },

    inheritedChildTransformations() {
      return this.cldOptions.transformations || [];
    },

    childTransformations() {
      return [
        ...(this.inheritedChildTransformations || []),
        ...(this.ownChildTransformations || [])
      ];
    },

    transformation() {
      return merge(this.ownTransformation, {
        transformation: [
          ...(this.ownTransformation.transformation || []),
          ...this.childTransformations
        ]
      });
    }
  }
};
