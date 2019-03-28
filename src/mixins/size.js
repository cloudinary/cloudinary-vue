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

  created() {
    this.addReadyCheck("size");
    fix.call(this);
  },

  updated() {
    fix.call(this);
  },

  mounted() {
    fix.call(this);
  },

  destroyed() {
    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }
};

function fix() {
  if (this.shouldMeasureSize) {
    if (this.$el && !this.cancelSizeListener) {
      this.cancelSizeListener = watchElementSize(this.$el, measurement => {
        const currentSize = pick(this.size, ["width", "height"]);
        const nextSize = pick(measurement, ["width", "height"]);
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

/**
 * Call back a provided function
 * whenever element changed it's size
 * @param {HTMLElement} element
 * @param {Function} cb
 */
export function watchElementSize(element, cb) {
  const delayedCallback = debounce(cb, 150);
  let cancelled = false;

  if (typeof window === "object") {
    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let i = 0, entry = entries[i]; i < entries.length; i += 1) {
          delayedCallback(pick(entry.contentRect, ["width", "height"]));
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
    }
    const handleWindowResize = () => {
      delayedCallback(
        pick(element.getBoundingClientRect(), ["width", "height"])
      );
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
  return () => {};
}
