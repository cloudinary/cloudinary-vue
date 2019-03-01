import { ready } from "./ready";

export const lazy = {
  mixins: [ready],

  props: {
    /**
     * If set to true activates a behaviour
     * where the image is not loaded
     * until the HTML element is visible on page
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
    this.markReady("lazy", true);
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
  } else {
    listener(true);
    return noop;
  }
}

function noop() {}
