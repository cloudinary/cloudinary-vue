<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { omit, merge } from "../utils";
import { normalizeRest } from "../helpers/attributes";
import { rejectTransformations } from "../helpers/rejectTransformations";
import { withOptions } from "../mixins/withOptions";

/**
 *
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldSource",

  inheritAttrs: false,

  mixins: [withOptions],

  render(h) {
    return h(
      "source",
      this.sourceOptions,
      rejectTransformations(this.$slots.default)
    );
  },

  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: { type: String, default: "", required: true }
    // /**
    //  * Media query for the source
    //  */
    // media: { type: String, default: "all" }
  },

  computed: {
    sourceOptions() {
      const htmlAttrs = Transformation.new(
        this.transformation
      ).toHtmlAttributes();

      return {
        attrs: merge(
          { media: "all" },
          normalizeRest(this.$attrs),
          omit(htmlAttrs, ["width", "height"]),
          this.publicId
            ? {
                srcset: Cloudinary.new(this.configuration).url(
                  this.publicId,
                  this.transformation
                )
              }
            : null
        )
      };
    }
  }
};
</script>
