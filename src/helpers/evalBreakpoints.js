/**
 * Normalizes `breakpoint` component attribute to an array of numbers
 * @param {Function|Array|String} valueOrGetter
 */
export function evalBreakpoints(valueOrGetter) {
  if (typeof valueOrGetter === "function") {
    return valueOrGetter();
  }
  if (typeof valueOrGetter === "string") {
    return JSON.parse(
      (valueOrGetter.slice(0, 1) === "[" ? "" : "[") +
        valueOrGetter +
        (valueOrGetter.slice(0, 1) === "]" ? "" : "]")
    );
  }
  return valueOrGetter;
}
