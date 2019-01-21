<template>
  <video v-bind="videoAttrs">
    <source v-for="source in sources" v-bind:key="source.mimeType" v-bind="source">
    <slot/>
  </video>
</template>

<script>
import { Cloudinary, Transformation, Util } from "cloudinary-core";
import { merge, shallowEqual, kv } from "../utils";
import { CombinedState } from "../reactive/CombinedState";
import {
  normalizeTransformation,
  normalizeConfiguration,
  normalizeRest
} from "../helpers/attributes";

/**
 * Cloudinary image element
 */
export default {
  name: "CLDVideo",
  inheritAttrs: false,
  props: {
    /** ID of your media file */
    publicId: { type: String, default: "", required: true },
    /** TODO */
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
    const attrsCombinedState = new CombinedState();
    const posterCombinedState = new CombinedState();
    return {
      attrsCombinedState,
      posterCombinedState,
      attrsCombined: attrsCombinedState.get(),
      posterAttrsCombined: null,
      ready: false
    };
  },
  methods: {
    getOwnAttrs() {
      return merge(
        normalizeConfiguration(this.$attrs),
        normalizeTransformation(this.$attrs)
      );
    }
  },
  computed: {
    videoAttrs() {
      if (!this.ready || !this.publicId) {
        return {};
      }

      const htmlAttrs = Transformation.new(
        this.attrsCombined
      ).toHtmlAttributes();
      const poster =
        this.posterAttrsCombined &&
        Object.keys(this.posterAttrsCombined).length > 0
          ? Cloudinary.new(this.posterAttrsCombined).url(
              this.posterAttrsCombined.publicId,
              this.posterAttrsCombined
            )
          : undefined;
      console.log("@video[](poster)", this.posterAttrsCombined, poster);
      return merge(normalizeRest(this.$attrs), htmlAttrs, {
        poster
      });
    },
    sources() {
      if (!this.ready || !this.publicId) {
        return [];
      }

      return Object.keys(this.sourceTypes).map(srcType => {
        const cfg = merge(
          this.attrsCombined,
          normalizeConfiguration(this.sourceTypes[srcType] || {})
        );
        const xt = merge(
          this.attrsCombined,
          normalizeTransformation(this.sourceTypes[srcType] || {}),
          {
            resource_type: "video",
            format: srcType
          }
        );
        let src = Cloudinary.new(cfg).url(this.publicId, xt);
        let mimeType = "video/" + (srcType === "ogv" ? "ogg" : srcType);
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
    const current = this.getOwnAttrs();
    this.ownState.next(current);

    this.attrsCombinedStateSub = this.attrsCombinedState.subscribe({
      next: v => {
        this.attrsCombined = v;
      }
    });

    this.posterCombinedStateSub = this.posterCombinedState.subscribe({
      next: v => {
        console.log("@video.poster", v);
        this.posterAttrsCombined = v;
      }
    });
  },
  updated() {
    const prev = this.ownState.get();
    const current = this.getOwnAttrs();
    if (!shallowEqual(prev, current)) {
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
