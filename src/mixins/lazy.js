import { ready } from "./ready";

/**
 * If necessary watches for root elements visibility
 * and posts the result to components data
 */
export const lazy = {
  mixins: [ready],

  props: {
    /**
     * Whether to only load the asset when it needs to be displayed instead of when the page first loads.
     */
    lazy: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return { visible: false };
  },

  created() {
    this.markReadyCheck("lazy");
    fix.call(this);
  },

  mounted() {
    fix.call(this);
  },

  updated() {
    fix.call(this);
  },

  destroyed() {
    if (this.cancelVisibilityListener) {
      this.cancelVisibilityListener();
    }
  }
};

function fix() {
  if (this.lazy) {
    if (this.$el && !this.cancelVisibilityListener) {
      this.cancelVisibilityListener = watchElementVisibility(
        this.$el,
        visible => {
          this.visible = this.visible || visible;
        }
      );
    }
  } else {
    this.visible = true;
    if (this.cancelVisibilityListener) {
      const { cancelVisibilityListener } = this;
      this.cancelVisibilityListener = null;
      cancelVisibilityListener();
    }
  }
}

function watchElementVisibility(element, listener) {
  if (typeof window === "object" && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === element) {
            listener(entry.isIntersecting);
          }
        });
      },
      { threshold: [0, 0.01] }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }

  listener(true);
  return noop;
}

function noop() {}
