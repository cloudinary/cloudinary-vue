<template>
  <div class="cld-video">
    <video v-bind="videoAttrs">
      <source v-for="(source, index) in sources" :key="index" v-bind="source"/>
    </video>
    <slot></slot>
  </div>
</template>
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
import { generateUrl } from '../../helpers/URLGenerator';

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
      registerTransformation: this.registerTransformation,
      registerPoster: this.registerPoster
    }
  },
  mixins: [lazy, withOptions],
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
  data() {
    return {
      transformations: [],
      posterAttrs: {},
    };
  },
  methods: {
    registerPoster(posterOptions) {
      this.posterAttrs = {...this.posterAttrs, ...posterOptions};
    },
    registerTransformation(transformation) {
      this.transformations = [...this.transformations, normalizeTransformation(transformation)];
    },
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
        return {};
      }

      const htmlAttrs = {
        poster: this.posterUrl,
        ...getHTMLAttributes(this.options)
      };

      const normalizedNonCloudinaryAttrs = normalizeNonCloudinary(this.$attrs);

      return {
          ...normalizedNonCloudinaryAttrs,
          ...htmlAttrs
      };
    },
    sources() {
      if (!this.publicId || (this.lazy && !this.visible)) {
        return [];
      }

      const sources = Object.keys(this.sourceTypes).map(srcType => {
        const srcTypeOptions = this.sourceTypes[srcType];
        const srcTypeChainedTransformation = Array.isArray(srcTypeOptions)
          ? srcTypeOptions.map(normalizeTransformation)
          : [normalizeTransformation(srcTypeOptions)];

        const src = generateUrl({
          configuration: {
            ...this.configuration,
            ...normalizeConfiguration(this.sourceTypes[srcType])
          },
          publicId: this.publicId,
          transformation: {
            resource_type: "video",
            format: srcType,
            ...this.options,
            transformation: [
              ...(this.options.transformation || []),
              ...srcTypeChainedTransformation,
              ...this.transformations,
            ]
          }
        });

        const htmlAttrs = normalizeNonCloudinary(
          this.sourceTypes[srcType] || {}
        );

        return {
          ...htmlAttrs,
          mimeType: `video/${srcType === "ogv" ? "ogg" : srcType}`,
          type: `video/${srcType === "ogv" ? "ogg" : srcType}`,
          src
        };
      });

      return sources;
    },
    posterUrl() {
      // <cld-video poster="url" />
      if (this.$attrs.poster && typeof this.$attrs.poster === "string") {
        return this.$attrs.poster;
      }

      const attrPosterOptions = this.$attrs.poster || {};
      const posterOptions = this.posterAttrs || {};
      const injectedOptions = this.options || {};

      const normalizedAttrsTransformation = normalizeTransformation(attrPosterOptions);
      const configuration = {
        ...this.configuration, 
        ...normalizeConfiguration(attrPosterOptions),
        ...posterOptions.configuration
      };

      const transformation = [
        ...(injectedOptions.transformation || []),
        normalizedAttrsTransformation,
        ...(posterOptions.transformation || [])
      ];
        

      // <cld-video :poster="{publicId:'x'}" />
      // <cld-video> <cld-poster publicId="x" /> </cld-video>
      const poster = {
        configuration,
        publicId: posterOptions.publicId || attrPosterOptions.publicId || this.publicId,
        transformation: {
          resource_type: posterOptions.publicId || attrPosterOptions.publicId ? "image" : "video",
          format: posterOptions.publicId || attrPosterOptions.publicId ? null : 'jpeg',
          ...(posterOptions || injectedOptions),
          transformation
        }
      }
      
      return generateUrl(poster);
    }
  }
};
</script>
