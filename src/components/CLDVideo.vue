<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, equal, kv, find } from "../utils";
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
        find(this.attrsCombined.transformation, t => t.width === 0) ||
        find(this.attrsCombined.transformation, t => t.height === 0)
      ) {
        return { class: className };
      }

      const htmlAttrs = Transformation.new({
        transformation: this.attrsCombined.transformation
      }).toHtmlAttributes();

      const poster =
        this.posterAttrsCombined &&
        Object.keys(this.posterAttrsCombined).length > 0
          ? Cloudinary.new(this.posterAttrsCombined.configuration).url(
              this.posterAttrsCombined.publicId,
              { transformation: this.posterAttrsCombined.transformation }
            )
          : undefined;

      return {
        class: className,
        attrs: merge(
          normalizeRest(this.$attrs),
          htmlAttrs,
          poster
            ? {
                poster
              }
            : {}
        )
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

        // console.log({ srcType, configuration, transformation, src });
        return { mimeType, src };
      });
    }
  },
  created() {
    if (this.CLDContextState) {
      this.contextState = this.attrsCombinedState.spawn();
      this.contextStateSub = this.CLDContextState.subscribe({
        next: v => {
          this.contextState.next(v);
        }
      });
    }

    this.ownState = this.attrsCombinedState.spawn();
    const current = this.getOwnCLDAttrs();
    this.ownState.next(current);

    this.attrsCombinedStateSub = this.attrsCombinedState.subscribe({
      next: v => {
        this.attrsCombined = v;
      }
    });

    this.posterCombinedStateSub = this.posterCombinedState.subscribe({
      next: v => {
        this.posterAttrsCombined = v;
      }
    });
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getOwnCLDAttrs();
    if (!equal(prev, current)) {
      this.ownState.next(current);
    }
  },
  mounted() {
    if (!this.ready) {
      this.ready = true;
    }
  },
  destroyed() {
    this.attrsCombinedStateSub();
    this.posterCombinedStateSub();
    this.ownState.complete();

    if (this.contextStateSub) {
      this.contextStateSub();
      this.contextState.complete();
    }
  }
};
</script>

<style lang="scss">
.cld-video {
}
</style>
