<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge } from "../utils";
import { normalizeTransformation, normalizeRest } from "../helpers/attributes";

import { rejectTransformations } from "../helpers/rejectTransformations";
import { withOptions } from "../mixins/withOptions";

/**
 * Generates a `picture` tag including the URL sources for the main formats
 * supported by web browsers (jpeg and webp by default).
 * Browsers can automatically select and play the image format that they best support,
 * and the image files are created dynamically when first accessed by your users.
 */
export default {
  name: "CldPicture",

  inheritAttrs: false,

  mixins: [withOptions],

  render(h) {
    return h("picture", this.pictureOptions, [
      ...this.sourcesOptions.map((options, i) =>
        h("source", merge({ key: `source${i}` }, options))
      ),
      h("img", merge({ key: "img" }, this.imageOptions)),
      ...rejectTransformations(this.$slots.default)
    ]);
  },

  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: { type: String, default: "", required: true },
    /**
     * An array of the image sources to put into the tag.
     * Each element can have `min_width` , `max_with` and `transformation`.
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

      const htmlAttrs = Transformation.new(
        this.transformation
      ).toHtmlAttributes();

      return {
        class: className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs)
      };
    },

    imageOptions() {
      const className = {
        "cld-picture__image": true
      };

      const htmlAttrs = Transformation.new(
        this.transformation
      ).toHtmlAttributes();

      return {
        class: className,
        attrs: merge(
          htmlAttrs.width ? { width: htmlAttrs.width } : null,
          htmlAttrs.height ? { height: htmlAttrs.height } : null,
          this.publicId
            ? {
                src: Cloudinary.new(this.configuration).url(
                  this.publicId,
                  this.transformation
                )
              }
            : {},
          this.img
        )
      };
    },

    sourcesOptions() {
      return this.sources.map(sourceConfig => {
        const sourceTransformationRaw = sourceConfig.transformation || [];
        const sourceTransformationRawList = Array.isArray(
          sourceTransformationRaw
        )
          ? sourceTransformationRaw
          : [sourceTransformationRaw];
        const sourceTransformationComplete = merge(
          {},
          {
            transformation: [
              // ...(this.transformation.transformation || []),
              this.transformation,
              ...sourceTransformationRawList.map(normalizeTransformation)
            ]
          }
        );

        const srcset = Cloudinary.new(this.configuration).url(
          this.publicId,
          sourceTransformationComplete
        );

        const media = [];
        if (sourceConfig.min_width) {
          media.push(`(min-width: ${num2px(sourceConfig.min_width)})`);
        }
        if (sourceConfig.max_width) {
          media.push(`(max-width: ${num2px(sourceConfig.max_width)})`);
        }

        return {
          attrs: merge(
            { srcset },
            media.length
              ? {
                  media: media.join(" and ")
                }
              : {}
          )
        };
      });
    }
  }
};

function num2px(n) {
  if (typeof n === "number") {
    return `${n}px`;
  }
  if (typeof n === "string") {
    return n;
  }
  return 0;
}
</script>
