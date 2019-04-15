<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge } from "../utils";
import { normalizeTransformation, normalizeRest } from "../helpers/attributes";
import { combineTransformations } from "../helpers/combineOptions";
import { resolveMedia } from "../helpers/resolveMedia";

import { ready } from "../mixins/ready";
import { mounted } from "../mixins/mounted";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";

/**
 * Generates a `picture` tag including the URL sources for the main formats
 * supported by web browsers (jpeg and webp by default).
 * Browsers can automatically select and play the image format that they best support,
 * and the image files are created dynamically when first accessed by your users.
 */
export default {
  name: "CldPicture",
  inheritAttrs: false,
  mixins: [ready, mounted, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h(
      "picture",
      this.pictureOptions,
      this.sourcesAttrs
        .map(attrs => h("source", { key: attrs.mimeType, attrs }))
        .concat(h("img", merge({ key: "img" }, this.imageOptions)))
        .concat(this.$slots.default)
    );
  },
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: { type: String, default: "", required: true },
    /**
     * An array of the image sources to put into the tag.
     * Each element can have `media` (`string` or an `object`), `configuration` (`object`), `transformation` (`object`) and `publicId` (`string`) fields - all are optional.
     * Media can be either string or an object with keys `all`, `screen`, `print`, `handheld`, `orientation`, `not`, `maxWidth`, `minWidth`, `maxHeight`, `minHeight` and `or` - all optional.
     */
    sources: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Additional `<img>` tag attributes
     */
    img: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    pictureOptions() {
      const className = {
        "cld-picture": true
      };

      if (!this.isReady) {
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

    imageOptions() {
      const className = {
        "cld-picture_image": true
      };

      if (!this.isReady) {
        return { class: className };
      }

      const htmlAttrs = Transformation.new(
        this.cldAttrs.transformation
      ).toHtmlAttributes();

      return {
        class: className,
        attrs: merge(
          htmlAttrs.width ? { width: htmlAttrs.width } : null,
          htmlAttrs.height ? { height: htmlAttrs.height } : null,
          this.publicId
            ? {
                src: Cloudinary.new(this.cldAttrs.configuration).url(
                  this.publicId,
                  this.cldAttrs.transformation
                )
              }
            : {},
          this.img
        )
      };
    },

    sourcesAttrs() {
      if (!this.isReady) {
        return [];
      }

      return this.sources.map(sourceConfig => {
        const transformation = combineTransformations(
          sourceConfig.transformation
            ? normalizeTransformation(sourceConfig.transformation)
            : this.cldAttrs.transformation
        );

        const htmlAttrs = normalizeRest(sourceConfig);

        const srcset = Cloudinary.new(this.cldAttrs.configuration).url(
          this.publicId,
          transformation
        );

        const media = resolveMedia(sourceConfig.media);

        return merge(htmlAttrs, { srcset, media });
      });
    }
  }
};
</script>
