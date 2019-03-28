import { merge } from "../utils";
import { getDPRAttr } from "./getDPRAttr";
import { findBreakpoint } from "./findBreakpoint";
/**
 * Based an selected mode
 * and breakpoints range
 * generates size transformations
 * @param {'fill'|'width'|'height'|'none'} mode
 * @param {object} size
 * @param {array} breakpoints
 */
export function getResizeTransformation(mode, size, breakpoints) {
  switch (mode) {
    case "fill":
      return merge(getDPRAttr(), {
        crop: "crop",
        width: size
          ? Math.floor(
              breakpoints ? findBreakpoint(breakpoints, size.width) : size.width
            )
          : 0,
        height: size
          ? Math.floor(
              breakpoints
                ? findBreakpoint(breakpoints, size.height)
                : size.height
            )
          : 0
      });

    case "width":
      return merge(getDPRAttr(), {
        crop: "scale",
        width: size
          ? Math.floor(
              breakpoints ? findBreakpoint(breakpoints, size.width) : size.width
            )
          : 0
      });

    case "height":
      return merge(getDPRAttr(), {
        crop: "scale",
        height: size
          ? Math.floor(
              breakpoints
                ? findBreakpoint(breakpoints, size.height)
                : size.height
            )
          : 0
      });

    case "none":
    default:
      return null;
  }
}
