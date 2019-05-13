<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { ready } from "../mixins/ready";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";
import { omit, merge } from "../utils";
import { normalizeRest } from "../helpers/attributes";

/**
 *
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
export default {
  name: "CldSource",
  inheritAttrs: false,
  render(h) {
    return h("source", this.sourceOptions, this.$slots.default);
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
  mixins: [ready, cldAttrsInherited, cldAttrsOwned],
  computed: {
    sourceOptions() {
      if (!this.isReady) {
        return normalizeRest(this.$attrs);
      }

      const htmlAttrs = Transformation.new(
        this.cldAttrs.transformation
      ).toHtmlAttributes();

      return {
        attrs: merge(
          { media: "all" },
          normalizeRest(this.$attrs),
          omit(htmlAttrs, ["width", "height"]),
          this.publicId
            ? {
                srcset: Cloudinary.new(this.cldAttrs.configuration).url(
                  this.publicId,
                  this.cldAttrs.transformation
                )
              }
            : null
        )
      };
    }
  }
};
</script>
