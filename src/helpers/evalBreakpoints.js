export function evalBreakpoints(valueOrGetter, args) {
  if (typeof valueOrGetter === "function") {
    return valueOrGetter.apply(null, args);
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
