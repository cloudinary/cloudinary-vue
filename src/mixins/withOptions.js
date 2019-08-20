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

    contextTransformation() {
      return this.cldOptions.transformation || [];
    },

    ownTransformation() {
      return normalizeTransformation(this.$attrs);
    },

    ownChildTransformations() {
      return this.$slots && this.$slots.default && this.$slots.default.length
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

    transformation() {
      return [
        ...this.contextTransformation,
        this.ownTransformation,
        ...this.ownChildTransformations
      ].filter(
        transformation =>
          typeof transformation === "object" &&
          transformation &&
          Object.keys(transformation).length
      );
    }
  }
};
