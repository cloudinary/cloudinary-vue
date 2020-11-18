import { debounce } from "../utils";

/**
 * Call back a provided function
 * whenever element changed it's size
 * @param {HTMLElement} element
 * @param {Function} cb
 */
export const watchElementSize = (element, cb) => {
  if (!window || typeof window !== "object") return

  const delayedCallback = debounce(cb, 150);
  let cancelled = false;

  if (window.ResizeObserver) {
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
      if (cancelled) return;

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
      if (cancelled)  return;

      cancelled = true;
      window.removeEventListener("resize", handleWindowResize);
    };
  }
} 