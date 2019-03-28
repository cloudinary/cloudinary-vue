import { normalizeRest } from "../helpers/attributes";
import { mounted } from "../mixins/mounted";
import { cldAttrsOwned } from "../mixins/cldAttrsOwned";
import { cldAttrsInherited } from "../mixins/cldAttrsInherited";

/**
 * Cloudinary context providing element
 */
export default {
  name: "CldContext",
  render(h) {
    return h(
      "div",
      this.htmlAttributes,
      this.$slots ? this.$slots.default : null
    );
  },
  inheritAttrs: false,
  mixins: [mounted, cldAttrsInherited, cldAttrsOwned],
  props: {},
  computed: {
    htmlAttributes() {
      return {
        class: "cld-context",
        attrs: normalizeRest(this.$attrs)
      };
    }
  }
};
