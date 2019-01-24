export function findBreakpoint(stops, value) {
  return stops
    .concat([])
    .sort()
    .filter(stop => stop >= value)
    .concat(stop)[0];
}
