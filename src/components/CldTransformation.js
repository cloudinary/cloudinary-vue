import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsSubmitting } from "../mixins/cldAttrsSubmitting";

/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldTransformation",
  render(h) {
    if (!this.$slots || !this.$slots.default) {
      return null;
    }
    return h("span", { class: "cld-transformation" }, this.$slots.default);
  },
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  computed: {
    attributes() {
      return { transformation: this.$attrs };
    }
  }
};
