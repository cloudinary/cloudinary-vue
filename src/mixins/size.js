import { pick, debounce } from "../utils";

/**
 * If necessary posts root element
 * size information
 * into components data
 */
export const size = {
  data() {
    return { size: null };
  },

  computed: {
    /* should be overriden */
    shouldMeasureSize() {
      return false;
    }
  },

  methods: {
    updateSizeObservation() {
      if (this.shouldMeasureSize) {
        if (this.$el && !this.cancelSizeListener) {
          this.cancelSizeListener = watchElementSize(this.$el, size => {
            if (!size) return;

            if (
              !this.size ||
              this.size.width !== size.width ||
              this.size.height !== size.height
            ) {
              this.size = size;
            }
          });
        }
      } else {
        if (this.cancelSizeListener) {
          this.cancelSizeListener();
        }
      }
    }
  },

  created() {
    this.updateSizeObservation();
  },

  updated() {
    this.updateSizeObservation();
  },

  mounted() {
    this.updateSizeObservation();
  },

  destroyed() {
    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }
};

/**
 * Call back a provided function
 * whenever element changed it's size
 * @param {HTMLElement} element
 * @param {Function} cb
 */
function watchElementSize(element, cb) {
  const delayedCallback = debounce(cb, 150);
  let cancelled = false;

  if (window && typeof window === "object") {
    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          delayedCallback({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          });
        }
      });
      resizeObserver.observe(element);
      return () => {
        if (cancelled) {
          return;
        }
        cancelled = true;
        resizeObserver.disconnect();
      };
    } else {
      const handleWindowResize = () => {
        const rect = element.getBoundingClientRect();
        delayedCallback({ width: rect.width, height: rect.height });
      };
      window.addEventListener("resize", handleWindowResize);
      handleWindowResize();
      return () => {
        if (cancelled) {
          return;
        }
        cancelled = true;
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }
}
