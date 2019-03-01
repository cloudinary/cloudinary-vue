<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, kv, find, pick } from "../utils";
import { findInTransformations } from "../helpers/findInTransformations";
import { CombinedState } from "../reactive/CombinedState";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeRest
} from "../helpers/attributes";
import {
  combineOptions,
  combineTransformations
} from "../helpers/combineOptions";

import { ready } from "../mixins/ready";
import { mounted } from "../mixins/mounted";
import { lazy } from "../mixins/lazy";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";

/**
 * Cloudinary video element
 */
export default {
  name: "CldVideo",
  inheritAttrs: false,
  mixins: [ready, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h(
      "video",
      this.videoAttrs,
      this.sources
        .map(attrs => h("source", { key: attrs.mimeType, attrs }))
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
     * <CldVideo :sourceTypes="{ mp4: { quality: 10 } }" />
     * ```
     */
    sourceTypes: {
      type: Object,
      default() {
        return merge.apply(
          this,
          Cloudinary.DEFAULT_VIDEO_PARAMS.source_types.map(type => kv(type, {}))
        );
      }
    }
  },
  provide() {
    return {
      CldPosterState: this.posterCombinedState
    };
  },
  data() {
    const posterCombinedState = new CombinedState(combineOptions);
    return {
      posterCombinedState,
      postercldAttrs: null
    };
  },
  computed: {
    videoAttrs() {
      const className = {
        "cld-video": true
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

      const htmlAttrs = merge(
        typeof this.$attrs.poster === "string"
          ? { poster: this.$attrs.poster }
          : this.posterOptions
          ? {
              poster: Cloudinary.new(this.posterOptions.configuration).url(
                this.posterOptions.publicId,
                this.posterOptions.transformation
              )
            }
          : {},
        Transformation.new(this.cldAttrs.transformation).toHtmlAttributes()
      );

      return {
        class: className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs)
      };
    },

    sources() {
      if (!this.isReady || !this.publicId) {
        return [];
      }

      if (this.lazy && !this.visible) {
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

        const src = Cloudinary.new(configuration).url(
          this.publicId,
          merge(
            {
              resource_type: "video",
              format: srcType
            },
            transformation
          )
        );
        const mimeType = "video/" + (srcType === "ogv" ? "ogg" : srcType);

        return merge(htmlAttrs, { mimeType, src });
      });
    },

    posterOptions() {
      const ownPosterAttrs = combineOptions(
        { configuration: this.cldAttrs.configuration },
        {
          publicId:
            typeof this.$attrs.poster === "object"
              ? (this.$attrs.poster || {}).publicId
              : null,
          configuration: normalizeConfiguration(
            typeof this.$attrs.poster === "object" && this.$attrs.poster
              ? this.$attrs.poster
              : {}
          ),
          transformation: normalizeTransformation(
            typeof this.$attrs.poster === "object" && this.$attrs.poster
              ? this.$attrs.poster
              : {}
          )
        }
      );

      const extPosterAttrs = this.postercldAttrs
        ? combineOptions(
            {
              publicId: this.publicId,
              configuration: this.cldAttrs.configuration
            },
            this.postercldAttrs
          )
        : {};

      const defaultPoster = combineOptions(
        { publicId: this.publicId },
        this.cldAttrs
      );

      return find(
        [extPosterAttrs, ownPosterAttrs, defaultPoster].map(options =>
          combineOptions(options, {
            transformation: {
              resource_type: "video",
              format: "jpeg"
            }
          })
        ),
        options => options.publicId
      );
    }
  },
  created() {
    this.posterCombinedStateSub = this.posterCombinedState.subscribe({
      next: v => {
        if (Object.keys(v).length) {
          this.postercldAttrs = v;
        }
      }
    });
  },
  destroyed() {
    this.posterCombinedStateSub();
  }
};
</script>

<style lang="scss">
.cld-video {
}
</style>
