/**
 * Finds a number in breakpoints array
 * that provided a suggestion
 * qualifies the most to be used as a value
 * @param {Array<number>} stops
 * @param {number} value
 */
export function findBreakpoint(stops, value) {
  if (stops.length === 0) {
    return value;
  }
  return stops
    .concat([])
    .sort((a, b) => a - b)
    .filter(stop => stop >= value)
    .concat(stops[0])[0];
}
