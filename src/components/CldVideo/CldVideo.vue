<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, kv, find } from "../../utils";
import { findInTransformations } from "../../helpers/findInTransformations";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeNonCloudinary,
  getHTMLAttributes
} from "../../helpers/attributes";
import { lazy } from "../../mixins/lazy";
import { withOptions } from "../../mixins/withOptions";
import CldPoster from "../CldPoster";
import CldTransformation from "../CldTransformation/CldTransformation";

const className = {
  "cld-video": true
};

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

  provide() {
    return {
      registerPoster: this.registerPoster
    }
  },
  mixins: [lazy, withOptions],

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
      default: () => Cloudinary.DEFAULT_VIDEO_PARAMS.source_types.reduce((currSrc, type) => ({ ...currSrc, [type]: {} }), {})
    }
  },

  methods: {
    registerPoster(posterOptions) {
      //TODO: need to implement
    }
  },

  computed: {
    videoAttrs() {
      if (
        !this.publicId ||
        !!findInTransformations(
          this.options,
          t => t.width === 0 || t.height === 0
        )
      ) {
        return { class: className };
      }

      const htmlAttrs = {
        poster: this.poster,
        ...getHTMLAttributes(this.options)
      };

      return {
        class: className,
        attrs: {
          ...normalizeNonCloudinary(this.$attrs),
          ...htmlAttrs
        }
      };
    },

    sources() {
      if (!this.publicId || (this.lazy && !this.visible)) {
        return [];
      }

      return Object.keys(this.sourceTypes).map(srcType => {
        const videoChainedTransformation =
          this.options.transformation || [];
        const sourceTypeChainedTransformation = Array.isArray(
          this.sourceTypes[srcType]
        )
          ? this.sourceTypes[srcType].map(normalizeTransformation)
          : [normalizeTransformation(this.sourceTypes[srcType])];

        const src = Cloudinary.new({
          ...this.configuration,
          ...normalizeConfiguration(this.sourceTypes[srcType])
        }).url(
          this.publicId, {
            resource_type: "video",
            format: srcType,
            ...this.options,
            transformation: [
              ...videoChainedTransformation,
              ...sourceTypeChainedTransformation
            ]
          }
        );

        const htmlAttrs = normalizeNonCloudinary(
          this.sourceTypes[srcType] || {}
        );

        return {
          ...htmlAttrs,
          mimeType: `video/${srcType === "ogv" ? "ogg" : srcType}`,
          src
        };
      });
    },

    poster() {
      // <cld-video poster="url" />
      if (this.$attrs.poster && typeof this.$attrs.poster === "string") {
        return this.$attrs.poster;
      }

      // <cld-video :poster="{publicId:'x'}" />
      if (this.$attrs.poster && typeof this.$attrs.poster === "object") {
        return Cloudinary.new({
          ...this.configuration,
          ...normalizeConfiguration(this.$attrs.poster)
        }).url(
          this.$attrs.poster.publicId || this.publicId, {
            resource_type:  this.$attrs.poster.publicId ? "image" : "video",
            format:  this.$attrs.poster.publicId ? null : 'jpeg',
            ...this.options,
            transformation: [
              ...(this.options.transformation
                ? this.options.transformation
                : []),
              ...(Array.isArray(this.$attrs.poster)
                ? this.$attrs.poster
                : [this.$attrs.poster]
              ).map(normalizeTransformation)
            ]
          }
        );        
      }

      // <cld-video> <cld-poster publicId="x" /> </cld-video>
      const posterChild = this.$slots.default
        ? find(
            this.$slots.default,
            child =>
              child.componentOptions &&
              child.componentOptions.Ctor.options.render === CldPoster.render
          )
        : null;
      if (posterChild) {
        const posterAttrs = normalizeTransformation(
          (posterChild.data && posterChild.data.attrs) || {}
        );
        const posterId = ((posterChild.data && posterChild.data.attrs) || {})
          .publicId;

        const posterTransformations = (
          posterChild.componentOptions.children || []
        ).filter(
          child =>
            child.componentOptions &&
            child.componentOptions.Ctor.options.render ===
              CldTransformation.render
        );
        return Cloudinary.new({
          ...this.configuration,
          ...normalizeConfiguration(posterAttrs)
        }).url(
          posterId || this.publicId, {
            resource_type: posterId ? "image" : "video",
            format: posterId ? null : 'jpeg',
            ...posterAttrs,
            transformation: [
              ...(posterAttrs.transformation || []),
              ...posterTransformations.map(posterTransformation =>
                normalizeTransformation(
                  (posterTransformation.data &&
                    posterTransformation.data.attrs) ||
                    {}
                )
              )
            ]
          }
        );
      }

      // default poster
      return Cloudinary.new(this.configuration).url(
        this.publicId, {
          resource_type: "video",
          format: "jpeg",
          ...this.options
        }
      );
    }
  }
};
</script>
