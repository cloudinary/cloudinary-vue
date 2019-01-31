<template>
  <div class="cld-context" v-bind="rootAttrs">
    <slot/>
  </div>
</template>

<script>
import { equal, merge } from "../utils";
import { CombinedState } from "../reactive/CombinedState";
import { normalizeConfiguration, normalizeRest } from "../helpers/attributes";
import { combineOptions } from "../helpers/combineOptions";
import { BehaviourGroup } from "../behaviours/BehaviourGroup";
import { CombineWithContext } from "../behaviours/CombineWithContext";
import { MaterializeCombinedState } from "../behaviours/MaterializeCombinedState";
import { CombineWithOwn } from "../behaviours/CombineWithOwn";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CLDContext",
  inheritAttrs: false,
  props: {},
  inject: {
    CLDContextState: {
      default() {
        return this.CLDGlobalContextState ? this.CLDGlobalContextState : null;
      }
    }
  },
  provide() {
    return {
      CLDContextState: this.attrsCombinedState
    };
  },
  methods: {
    getOwnCLDAttrs() {
      return {
        configuration: normalizeConfiguration(this.$attrs)
      };
    }
  },
  computed: {
    rootAttrs() {
      return normalizeRest(this.$attrs);
    }
  },
  data() {
    const attrsCombinedState = new CombinedState(combineOptions);
    return {
      attrsCombinedState
    };
  },
  created() {
    this.behaviours = new BehaviourGroup(
      {
        context: CombineWithContext,
        own: CombineWithOwn
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

<style>
.cld-context {
  display: inline-flex;
  display: contents;
}
</style>
