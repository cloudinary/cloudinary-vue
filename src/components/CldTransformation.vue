<script>
/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldTransformation",

  inheritAttrs: false,

  render() {
    console.error(
      `<cld-transformation /> should be a immediate descendant of cld-(image|video|poster)`
    );
    return null;
  }
};
</script>
