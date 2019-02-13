import { pick, debounce } from "../utils";

/**
 *
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
