<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge } from "../utils";
import { findInTransformations } from "../helpers/findInTransformations";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeRest
} from "../helpers/attributes";
import { combineTransformations } from "../helpers/combineOptions";

import { ready } from "../mixins/ready";
import { mounted } from "../mixins/mounted";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";

/**
 * Cloudinary picture element
 */
export default {
  name: "CldPicture",
  inheritAttrs: false,
  mixins: [ready, mounted, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h(
      "picture",
      this.pictureAttrs,
      this.sources
        .map(attrs => h("source", { key: attrs.mimeType, attrs }))
        .concat(h("img", { key: "img" }))
        .concat(this.$slots.default)
    );
  },
  props: {
    /** ID of your media file */
    publicId: { type: String, required: true },
    /**
     * A dictionary of media type (`string`) to additional transformation options (or an empty object)
     *
     * Example:
     * ```
     * <CldPicture :sourceTypes="{ jpeg: { quality: 10 } }" />
     * ```
     */
    sourceTypes: {
      type: Object,
      default() {
        return {
          webp: {},
          jpeg: {}
        };
      }
    }
  },
  computed: {
    pictureAttrs() {
      const className = {
        "cld-picture": true
      };

      if (
        !this.isReady ||
        !this.publicId ||
        !!findInTransformations(
          this.cldAttrs.transformation,
          t => t.width === 0 || t.height === 0
        )
      ) {
        return { class: className };
      }

      const htmlAttrs = Transformation.new(
        this.cldAttrs.transformation
      ).toHtmlAttributes();

      return {
        class: className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs)
      };
    },
    sources() {
      if (!this.isReady || !this.publicId) {
        return [];
      }

      return Object.keys(this.sourceTypes).map(srcType => {
        const configuration = merge(
          this.cldAttrs.configuration,
          normalizeConfiguration(this.sourceTypes[srcType] || {})
        );

        const transformation = combineTransformations(
          this.cldAttrs.transformation,
          normalizeTransformation(this.sourceTypes[srcType] || {})
        );

        const htmlAttrs = normalizeRest(this.sourceTypes[srcType] || {});

        const src = Cloudinary.new(configuration).url(this.publicId, {
          resource_type: "image",
          format: srcType,
          transformation
        });

        return merge(htmlAttrs, { type: `image/${srcType}`, srcset: src });
      });
    }
  }
};
</script>

<style lang="scss">
.cld-picture {
}
</style>
