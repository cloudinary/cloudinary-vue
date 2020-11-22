
<script>
import { COMPONENTS } from '../../constants'

/**
 * Cloudinary context providing element
 */
export default {
  name: COMPONENTS.CldContext,

  inheritAttrs: false,

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
