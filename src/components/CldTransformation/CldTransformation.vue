<script>
import { COMPONENTS } from '../../constants'
/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: COMPONENTS.CldTransformation,
  inject: {
    registerTransformation: {
      default: null
    }
  },
  created() {
    if (this.registerTransformation) {
      this.registerTransformation(this.$attrs || {});
    }
  },
  render() {
    return null;
  }
};
</script>
