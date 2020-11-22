/**
 * Finds a number in breakpoints array
 * that provided a suggestion
 * qualifies the most to be used as a value
 * @param {Array<number>} stops
 * @param {number} value
 */
export function findBreakpoint(stops = [], value) {
  const givenBreakpoints = stops && Array.isArray(stops) ? [...stops] : [ stops ]
  const filteredBreakpoints = givenBreakpoints.sort((a, b) => a - b)
                            .filter(stop => stop >= value)
  return (filteredBreakpoints.length ? filteredBreakpoints : stops)[0]
}
