
<script>
import { normalizeNonCloudinary } from "../../helpers/attributes";
import { withOptions } from "../../mixins/withOptions";
import { COMPONENTS } from '../../constants'

/**
 * Cloudinary context providing element
 */
export default {
  name: COMPONENTS.CldContext,

  inheritAttrs: false,

  mixins: [withOptions],

  provide() {
    return {
      contextConfiguration: this.configuration,
      contextOptions: this.$attrs,
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
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
</script>
