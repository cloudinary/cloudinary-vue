import { findBreakpoint } from "./findBreakpoint";
import { normalizeTransformation } from "./attributes";

/**
 * Return styles according to a responsive mode
 * @param {'fill'|'width'|'height'|boolean} mode
 */
export function getResponsiveStyle(mode) {
  switch (mode) {
    case "height":
      return {
        display: "block",
        height: "100%",
        width: "auto"
      };

    case true:
    case "width":
      return {
        display: "block",
        width: "100%"
      };

    case "fill":
      return {
        display: "block",
        width: "100%",
        height: "100%"
      };

    default:
      return {};
  }
}

/**
 * Based an selected mode
 * and breakpoints range
 * generates size transformations
 * @param {'fill'|'width'|'height'|boolean} mode
 * @param {object} size
 * @param {array} breakpoints
 */
export function getResizeTransformation(mode, size, breakpoints) {
  if (!size) {
    return {};
  }

  switch (mode) {
    case "fill":
      const computedSize = breakpoints
        ? {
            width: Math.floor(findBreakpoint(breakpoints, size.width)),
            height: Math.floor(
              (size.height / size.width) *
                findBreakpoint(breakpoints, size.width)
            )
          }
        : {
            width: Math.floor(size.width),
            height: Math.floor(size.height)
          };
      return normalizeTransformation({
        ...getDPRAttr(),
        crop: "fill",
        ...computedSize
      });

    case true:
    case "width":
      return normalizeTransformation({
        ...getDPRAttr(),
        crop: "scale",
        width: Math.floor(
          breakpoints ? findBreakpoint(breakpoints, size.width) : size.width
        )
      });

    case "height":
      return normalizeTransformation({
        ...getDPRAttr(),
        crop: "scale",
        height: Math.floor(
          breakpoints ? findBreakpoint(breakpoints, size.height) : size.height
        )
      });
    default:
      return {};
  }
}

/** Generate DPR transformation if DPR information is available */
export function getDPRAttr() {
  return "devicePixelRatio" in window ? { dpr: window.devicePixelRatio } : {};
}
