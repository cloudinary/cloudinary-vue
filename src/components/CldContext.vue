<script>
import { normalizeNonCloudinary } from "../helpers/attributes";
import { rejectTransformations } from "../helpers/rejectTransformations";
import { State } from "../reactive/State";
import { withOptions } from "../mixins/withOptions";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CldContext",

  inheritAttrs: false,

  mixins: [withOptions],

  provide() {
    return {
      cldOptionsState: this.nextCldOptionsState
    };
  },

  render(h) {
    return h(
      "div",
      {
        class: { "cld-context": true },
        attrs: normalizeNonCloudinary(this.$attrs)
      },
      rejectTransformations(this.$slots.default)
    );
  },

  data() {
    return { nextCldOptionsState: new State({}) };
  },

  methods: {
    postOptions() {
      this.nextCldOptionsState.next({
        configuration: this.configuration,
        transformation: this.transformation
      });
    }
  },

  created() {
    this.postOptions();
  },

  updated() {
    this.postOptions();
  },

  destroyed() {
    this.nextCldOptionsState.complete();
  }
};
</script>
