<script>
import { Cloudinary, Transformation } from "cloudinary-core";
import { merge, find } from "../utils";
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
 * Cloudinary picture element
 */
export default {
  name: "CLDPicture",
  inheritAttrs: false,
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
     * <CLDPicture :sourceTypes="{ jpeg: { quality: 10 } }" />
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
  inject: {
    CLDContextState: {
      default() {
        return this.CLDGlobalContextState ? this.CLDGlobalContextState : null;
      }
    }
  },
  provide() {
    return {
      CLDImageState: this.attrsCombinedState
    };
  },
  data() {
    const attrsCombinedState = new CombinedState(combineOptions);
    return {
      attrsCombinedState,
      attrsCombined: attrsCombinedState.get(),
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
    pictureAttrs() {
      const className = {
        "cld-picture": true
      };

      if (
        !this.ready ||
        !this.publicId ||
        this.attrsCombined.width === 0 ||
        this.attrsCombined.height === 0 ||
        find(
          (this.attrsCombined.transformation || {}).transformation || [],
          t => t.width === 0 || t.height === 0
        )
      ) {
        return { class: className };
      }

      const htmlAttrs = Transformation.new(
        this.attrsCombined.transformation
      ).toHtmlAttributes();

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

        const htmlAttrs = normalizeRest(this.sourceTypes[srcType] || {});

        const src = Cloudinary.new(configuration).url(this.publicId, {
          resource_type: "image",
          format: srcType,
          transformation
        });

        return merge(htmlAttrs, { type: `image/${srcType}`, srcset: src });
      });
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
  },
  updated() {
    this.behaviours.onUpdated();
  },
  mounted() {
    this.behaviours.onMounted();
  },
  destroyed() {
    this.behaviours.onDestroyed();
  }
};
</script>

<style lang="scss">
.cld-picture {
}
</style>
