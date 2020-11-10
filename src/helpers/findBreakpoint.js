import { filter } from "core-js/fn/array";

/**
 * Finds a number in breakpoints array
 * that provided a suggestion
 * qualifies the most to be used as a value
 * @param {Array<number>} stops
 * @param {number} value
 */
export function findBreakpoint(stops = [], value) {
  const filteredBreakpoints = stops
                              .sort((a, b) => a - b)
                              .filter(stop => stop >= value)
  return filteredBreakpoints.length ? filteredBreakpoints[0] : stops[0]
}
