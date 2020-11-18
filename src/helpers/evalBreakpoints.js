/**
 * Normalizes `breakpoint` component attribute to an array of numbers
 * @param {Function|Array|String} valueOrGetter
 */
export function evalBreakpoints(valueOrGetter) {
  if (typeof valueOrGetter === "function") {
    return valueOrGetter();
  }
  if (typeof valueOrGetter === "string") {
    const firstChar = valueOrGetter.slice(0, 1)
    const lastChar = valueOrGetter.slice(-1)

    return JSON.parse(`${firstChar === '[' ? '' : '['}${valueOrGetter}${lastChar === ']' ? '' : ']'}`)
  }
  return valueOrGetter;
}
