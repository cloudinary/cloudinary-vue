export function findBreakpoint(stops, value) {
  return stops
    .concat([])
    .sort((a, b) => a - b)
    .filter(stop => stop >= value)
    .concat(stop)[0];
}
