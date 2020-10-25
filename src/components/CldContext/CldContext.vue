
<script>
/**
 * Cloudinary context providing element
 */
export default {
  name: "CldContext",
  inheritAttrs: false,
  provide() {
    return {
      contextOptions: this.$attrs,
    };
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
