
<script>
import { normalizeNonCloudinary } from "../../helpers/attributes";
import { withOptions } from "../../mixins/withOptions";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CldContext",

  inheritAttrs: false,

  mixins: [withOptions],

  provide() {
    return {
      contextConfiguration: this.configuration
    };
  },

  computed: {
    attributes() {
      return normalizeNonCloudinary(this.$attrs)
    }
  },

  render(h) {
    return h(
      "div",
      {
        class: { "cld-context": true },
        attrs: this.attributes
      },
      this.$slots.default
    );
  }
};
</script>
