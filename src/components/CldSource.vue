<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { ready } from "../mixins/ready";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";
import { omit, merge } from "../utils";
import { normalizeRest } from "../helpers/attributes";
import { resolveMedia } from "../helpers/resolveMedia";

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
    publicId: { type: String, default: "", required: true },
    /**
     * Media can be either string or an object with keys `all`, `screen`, `print`, `handheld`, `orientation`, `not`, `maxWidth`, `minWidth`, `maxHeight`, `minHeight` and `or` - all optional.
     */
    media: { type: [String, Object], default: "all" }
  },
  mixins: [ready, cldAttrsInherited, cldAttrsOwned],
  computed: {
    sourceOptions() {
      if (!this.isReady) {
        return merge(normalizeRest(this.$attrs), {
          media: resolveMedia(this.media)
        });
      }

      const htmlAttrs = Transformation.new(
        this.cldAttrs.transformation
      ).toHtmlAttributes();

      return {
        attrs: merge(
          normalizeRest(this.$attrs),
          omit(htmlAttrs, ["width", "height"]),
          {
            media: resolveMedia(this.media)
          },
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
