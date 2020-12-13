import { findBreakpoint } from "./findBreakpoint";
import { evalBreakpoints } from "./evalBreakpoints";

/**
 * Based an selected mode
 * and breakpoints range
 * generates size transformations
 * @param {'fill'|'width'|'height'|boolean} mode
 * @param {object} size
 * @param {array} breakpoints
 */
export function getResizeTransformation(mode, size, originalBP) {
  if (!mode || !size) {
    return {};
  }

  const breakpoints = evalBreakpoints(originalBP)

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
      return {
        crop: "fill",
        ...computedSize
      };

    case true:
    case "width":
      return {
        crop: "scale",
        width: Math.floor(
          breakpoints ? findBreakpoint(breakpoints, size.width) : size.width
        )
      };

    case "height":
      return {
        crop: "scale",
        height: Math.floor(
          breakpoints ? findBreakpoint(breakpoints, size.height) : size.height
        )
      };
    default:
      return {};
  }
}
