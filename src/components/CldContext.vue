<script>
import { normalizeRest } from "../helpers/attributes";
import { extractOptions } from "../helpers/extractOptions";
import { rejectTransformations } from "../helpers/rejectTransformations";
import { combineOptions } from "../helpers/combineOptions";
import { State } from "../reactive/State";
import { inContext } from "../mixins/inContext";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CldContext",

  inheritAttrs: false,

  mixins: [inContext],

  provide() {
    return {
      cldParentState: this.cldAttrsState
    };
  },

  render(h) {
    return h(
      "div",
      { class: { "cld-context": true }, attrs: this.htmlAttributes },
      rejectTransformations(this.$slots.default)
    );
  },

  props: {},

  data() {
    return { cldAttrsState: new State({}) };
  },

  computed: {
    htmlAttributes() {
      return normalizeRest(this.$attrs);
    }
  },

  created() {
    this.cldAttrsState.next(
      combineOptions(
        this.parentOptions,
        extractOptions(this.$attrs, this.$slots.default)
      )
    );
  },

  updated() {
    this.cldAttrsState.next(
      combineOptions(
        this.parentOptions,
        extractOptions(this.$attrs, this.$slots.default)
      )
    );
  },

  destroyed() {
    this.cldAttrsState.complete();
  }
};
</script>
