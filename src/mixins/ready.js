import { kv, merge } from "../utils";

export const ready = {
  data() {
    return { ready: {} };
  },
  computed: {
    /**
     * Produces a ready state (boolean)
     * If any of registered ready flags (object props)
     * are marked "true"
     */
    isReady() {
      const { ready } = this;
      const flags = Object.keys(ready);

      if (flags.length === 0) {
        return false;
      }

      for (let i = 0; i < flags.length; i++) {
        if (!ready[flags[i]]) {
          return false;
        }
      }

      return true;
    }
  },
  methods: {
    markReady(name, value) {
      if (this.ready[name] !== value) {
        this.ready = merge(this.ready, kv(name, !!value));
      }
    }
  }
  // beforeCreate() {
  //   console.log(this.$options._componentTag, "beforeCreate", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // created() {
  //   console.log(this.$options._componentTag, "created", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // beforeMount() {
  //   console.log(this.$options._componentTag, "beforeMount", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // mounted() {
  //   console.log(this.$options._componentTag, "mounted", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // beforeUpdate() {
  //   console.log(this.$options._componentTag, "beforeUpdate", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // update() {
  //   console.log(this.$options._componentTag, "update", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // beforeDestroy() {
  //   console.log(this.$options._componentTag, "beforeDestroy", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // },
  // destroyed() {
  //   console.log(this.$options._componentTag, "destroyed", {
  //     parent: !!this.CldParentState,
  //     attrs: this.$attrs,
  //     combined: this.cldAttrs
  //   });
  // }
};
