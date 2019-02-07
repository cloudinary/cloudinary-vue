<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, kv, find } from "../utils";
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
import { BehaviourGroup } from "../behaviours/BehaviourGroup";
import { Mounting } from "../behaviours/Mounting";
import { CombineWithContext } from "../behaviours/CombineWithContext";
import { MaterializeCombinedState } from "../behaviours/MaterializeCombinedState";
import { CombineWithOwn } from "../behaviours/CombineWithOwn";

/**
 * Cloudinary image element
 */
export default {
  name: "CLDVideo",
  inheritAttrs: false,
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
     * <CLDVideo :sourceTypes="{ mp4: { quality: 10 } }" />
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
  inject: {
    CLDContextState: {
      default() {
        return this.CLDGlobalContextState ? this.CLDGlobalContextState : null;
      }
    }
  },
  provide() {
    return {
      CLDVideoState: this.attrsCombinedState,
      CLDPosterStateOfVideoTag: this.posterCombinedState
    };
  },
  data() {
    const attrsCombinedState = new CombinedState(combineOptions);
    const posterCombinedState = new CombinedState(combineOptions);
    return {
      attrsCombinedState,
      posterCombinedState,
      attrsCombined: attrsCombinedState.get(),
      posterAttrsCombined: null,
      ready: false
    };
  },
  methods: {
    getOwnCLDAttrs() {
      return {
        configuration: normalizeConfiguration(this.$attrs),
        transformation: normalizeTransformation(this.$attrs)
      };
    }
  },
  computed: {
    videoAttrs() {
      const className = {
        "cld-video": true
      };

      if (
        !this.ready ||
        !this.publicId ||
        this.attrsCombined.width === 0 ||
        this.attrsCombined.height === 0 ||
        find(
          this.attrsCombined.transformation.transformation || [],
          t => t.width === 0
        ) ||
        find(
          this.attrsCombined.transformation.transformation || [],
          t => t.height === 0
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
        Transformation.new(this.attrsCombined.transformation).toHtmlAttributes()
      );

      return {
        class: className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs)
      };
    },
    sources() {
      if (!this.ready || !this.publicId) {
        return [];
      }

      return Object.keys(this.sourceTypes).map(srcType => {
        const configuration = merge(
          this.attrsCombined.configuration,
          normalizeConfiguration(this.sourceTypes[srcType] || {})
        );
        const transformation = combineTransformations(
          this.attrsCombined.transformation,
          normalizeTransformation(this.sourceTypes[srcType] || {})
        );
        const src = Cloudinary.new(configuration).url(this.publicId, {
          resource_type: "video",
          format: srcType,
          transformation
        });
        const mimeType = "video/" + (srcType === "ogv" ? "ogg" : srcType);

        return { mimeType, src };
      });
    },
    posterOptions() {
      const ownPosterAttrs = combineOptions(
        { configuration: this.attrsCombined.configuration },
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
      const extPosterAttrs = this.posterAttrsCombined || {};
      const defaultPoster = combineOptions(
        { publicId: this.publicId },
        this.attrsCombined
      );
      return find(
        [extPosterAttrs, ownPosterAttrs, defaultPoster],
        _ => _.publicId
      );
    }
  },
  created() {
    this.behaviours = new BehaviourGroup(
      {
        mounting: Mounting,
        context: CombineWithContext,
        own: CombineWithOwn,
        materialize: MaterializeCombinedState
      },
      this
    );

    this.behaviours.onCreated();

    this.posterCombinedStateSub = this.posterCombinedState.subscribe({
      next: v => {
        this.posterAttrsCombined = v;
      }
    });
  },
  updated() {
    this.behaviours.onUpdated();
  },
  mounted() {
    this.behaviours.onMounted();
  },
  destroyed() {
    this.posterCombinedStateSub();

    this.behaviours.onDestroyed();
  }
};
</script>

<style lang="scss">
.cld-video {
}
</style>
