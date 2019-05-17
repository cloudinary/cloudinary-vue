import { ready } from "./ready";
import { equal, pick, debounce } from "../utils";

/**
 * If necessary posts root element
 * size information
 * into components data
 */
export const size = {
  mixins: [ready],

  props: {},

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
            const currentSize = pick(this.size, ["width", "height"]);
            const nextSize = pick(size, ["width", "height"]);
            if (!equal(currentSize, nextSize)) {
              this.size = nextSize;
              this.markReadyCheck("size");
            }
          });
        }
      } else {
        this.markReadyCheck("size");
        if (this.cancelSizeListener) {
          this.cancelSizeListener();
        }
      }
    }
  },

  created() {
    this.addReadyCheck("size");
    this.updateSizeObservation.call();
  },

  updated() {
    this.updateSizeObservation.call();
  },

  mounted() {
    this.updateSizeObservation.call();
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

  if (typeof window === "object") {
    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const size = pick(entry.contentRect, ["width", "height"]);
          delayedCallback(size);
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
        const size = pick(element.getBoundingClientRect(), ["width", "height"]);
        delayedCallback(size);
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
