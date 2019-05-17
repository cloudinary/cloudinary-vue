<script>
import { cldChild } from "../mixins/cldChild";
import { normalizeTransformation } from "../helpers/attributes";
import { equal } from "../utils";

/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldTransformation",
  inheritAttrs: false,
  mixins: [cldChild],

  render() {
    return null;
  },

  computed: {
    transformationComponent() {
      return {
        transformation: { transformation: normalizeTransformation(this.$attrs) }
      };
    }
  },

  created() {
    this.transformationComponentState = this.cldParentState.spawn();
    this.transformationComponentState.next(this.transformationComponent);
  },

  updated() {
    const prev = this.transformationComponentState.get();
    const current = this.transformationComponent;
    if (!equal(prev, current)) {
      this.transformationComponentState.next(current);
    }
  },

  destroyed() {
    this.transformationComponentState.complete();
  }
};
</script>
