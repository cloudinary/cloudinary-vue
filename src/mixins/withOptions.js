import {
  normalizeTransformation,
  normalizeConfiguration
} from "../helpers/attributes";

/**
 * This extracts configuration and transformation options
 * from the element's own and inherited attributes
 */
export const withOptions = {
  computed: {
    configuration() {
      return normalizeConfiguration({
        ...(this.defaultConfigurations || []),
        ...(this.$props || []),
        ...this.contextConfiguration,
        ...this.$attrs,
      })
    },
    options() {
      return normalizeTransformation(this.$attrs);
    }
  }
};
