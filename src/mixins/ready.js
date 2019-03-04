import { kv, merge } from "../utils";

/**
 * helper mixin for marking
 * which of other mixins report "ready" state
 */
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
    /**
     * Register a single mixin ready flag to true
     * @param {string} name
     */
    addReadyCheck(name) {
      this.ready = merge(this.ready, kv(name, false));
    },
    /**
     * Switch on a single mixin ready flag to true
     * @param {string} name
     */
    markReadyCheck(name) {
      if (!this.ready[name]) {
        this.ready = merge(this.ready, kv(name, true));
      }
    }
  }
};
