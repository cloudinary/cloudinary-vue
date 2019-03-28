import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, kv, find } from "../utils";
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
 * Deliver videos and specify video transformations using the `cld-video` (CldVideo) element,
 * which automatically generates an HTML5 video tag including the URL sources for the main formats
 * supported by web browsers (webm, mp4 and ogv by default), as well as a poster thumbnail image,
 * which is automatically generated from a frame in the video.
 * Browsers can automatically select and play the video format that they best support,
 * and the video files are created dynamically when first accessed by your users.
 *
 * You can optionally include `cld-transformation` components to define transformations to apply to the delivered video.
 *
 * For more information see
 * <a href="https://cloudinary.com/documentation/vue_video_manipulation#cldvideo_component" target="_blank">
 * cld-video component</a> and
 * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#embedding_videos_in_web_pages"
 * target="_blank">embedding videos in web pages</a>
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
    /**
     * The unique identifier of an uploaded video.
     */
    publicId: { type: String, default: "", required: true },
    /**
     * An ordered array of the video source types to include in the HTML5 tag, where the type is mapped to the mime type.
     * You can also add a specific transformation for each specified video format by adding a transformation struct. Example:
     *
     * `<CldVideo :sourceTypes="{ mp4: { quality: 10 } }" />`
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
      posterCldAttrs: null
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
        {
          configuration: this.cldAttrs.configuration
        },
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
      ownPosterAttrs.transformation = ownPosterAttrs.transformation || {};
      if ((this.$attrs.poster || {}).publicId) {
        ownPosterAttrs.transformation.resource_type = "image";
      } else {
        ownPosterAttrs.transformation.resource_type = "video";
        ownPosterAttrs.transformation.format = "jpeg";
      }

      const extPosterAttrs = this.posterCldAttrs
        ? combineOptions(
            {
              publicId: this.publicId,
              configuration: this.cldAttrs.configuration
            },
            this.posterCldAttrs
          )
        : {};
      extPosterAttrs.transformation = extPosterAttrs.transformation || {};
      if ((this.posterCldAttrs || {}).publicId) {
        extPosterAttrs.transformation.resource_type = "image";
      } else {
        extPosterAttrs.transformation.resource_type = "video";
        extPosterAttrs.transformation.format = "jpeg";
      }

      const defaultPoster = merge(
        combineOptions({ publicId: this.publicId }, this.cldAttrs),
        {
          transformation: {
            resource_type: "video",
            format: "jpeg"
          }
        }
      );

      return find(
        [extPosterAttrs, ownPosterAttrs, defaultPoster],
        options => options.publicId
      );
    }
  },
  created() {
    this.posterCombinedStateSub = this.posterCombinedState.subscribe({
      next: v => {
        if (Object.keys(v).length) {
          this.posterCldAttrs = v;
        }
      }
    });
  },
  destroyed() {
    this.posterCombinedStateSub();
  }
};
