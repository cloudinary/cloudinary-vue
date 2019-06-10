<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { omit, merge } from "../utils";
import { normalizeRest } from "../helpers/attributes";
import { extractOptions } from "../helpers/extractOptions";
import { rejectTransformations } from "../helpers/rejectTransformations";
import { combineOptions } from "../helpers/combineOptions";

/**
 *
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldSource",

  inheritAttrs: false,

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
        this.options.transformation
      ).toHtmlAttributes();

      return {
        attrs: merge(
          { media: "all" },
          normalizeRest(this.$attrs),
          omit(htmlAttrs, ["width", "height"]),
          this.publicId
            ? {
                srcset: Cloudinary.new(this.options.configuration).url(
                  this.publicId,
                  this.options.transformation
                )
              }
            : null
        )
      };
    },

    options() {
      const ownOptions = extractOptions(this.$attrs, this.$slots.default);
      const { parentOptions } = this;
      return combineOptions(parentOptions, ownOptions);
    }
  }
};
</script>
