import { merge } from "../utils";
import { getDPRAttr } from "./getDPRAttr";
import { findBreakpoint } from "./findBreakpoint";
/**
 *
 * @param {string} mode fill/width/height/none
 * @param {object} size
 * @param {array} breakpoints
 */
export function getResizeTransformation(mode, size, breakpoints) {
  return {
    fill: merge(
      getDPRAttr(),
      {
        crop: "crop"
      },
      !size
        ? { width: 0, height: 0 }
        : breakpoints
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
          }
    ),
    width: merge(getDPRAttr(), {
      crop: "scale",
      width: Math.floor(
        !size
          ? 0
          : breakpoints
          ? findBreakpoint(breakpoints, size.width)
          : size.width
      )
    }),
    height: merge(getDPRAttr(), {
      crop: "scale",
      height: Math.floor(
        !size
          ? 0
          : breakpoints
          ? findBreakpoint(breakpoints, size.height)
          : size.height
      )
    }),
    none: null
  }[mode];
}
