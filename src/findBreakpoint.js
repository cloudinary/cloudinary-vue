export function findBreakpoint(stops, value) {
  for (const stop of stops) {
    if (stop >= value) {
      return stop;
    }
  }
  return stops.slice(-1)[0];
}
