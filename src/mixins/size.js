import { ready } from "./ready";
import { equal, pick, debounce } from "../utils";

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
    this.markReady("size", false);
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
      this.cancelSizeListener = watchElementSize(this.$el, size => {
        const currentSize = pick(this.size, ["width", "height"]);
        const nextSize = pick(size, ["width", "height"]);
        if (!equal(currentSize, nextSize)) {
          this.size = nextSize;
          this.markReady("size", true);
        }
      });
    }
  } else {
    this.markReady("size", true);
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
        for (const entry of entries) {
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
    } else {
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
  }
}
