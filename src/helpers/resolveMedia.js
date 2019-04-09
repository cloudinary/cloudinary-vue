export function resolveMedia(media) {
  if (typeof media === "string") {
    return media;
  }
  if (typeof media === "object") {
    return []
      .concat(media)
      .map(resolveMediaObject)
      .join(", ");
  }
  return undefined;
}

function resolveMediaObject(media) {
  const queries = [
    media.all ? "all" : null,
    media.screen ? "screen" : null,
    media.print ? "print" : null,
    media.handheld ? "handheld" : null,
    media.orientation ? `orientation: ${media.orientation}` : null,
    media.not ? `not ${resolveMedia(media.not) || ""}` : null,
    media.maxWidth ? `max-width: ${resolveUnit(media.maxWidth)}` : null,
    media.minWidth ? `min-width: ${resolveUnit(media.minWidth)}` : null,
    media.maxHeight ? `max-height: ${resolveUnit(media.maxHeight)}` : null,
    media.minHeight ? `min-height: ${resolveUnit(media.minHeight)}` : null,
    media.or ? `${resolveMedia(media.or).join(", ")}` : null
  ].filter(q => q != null);
  if (queries.length === 0) {
    return undefined;
  }
  if (queries.length === 1) {
    return queries[0];
  }
  return queries.map(q => (q.indexOf(" ") >= 0 ? `(${q})` : q)).join(" and ");
}

function resolveUnit(v) {
  if (v == null) {
    throw new Error("null is not a number");
  }
  if (typeof v === "number") {
    return `${v}px`;
  }
  if (typeof v === "string") {
    return v;
  }
  const valueOfValue = v.valueOf();
  if (valueOfValue !== v) {
    return resolveUnit(valueOfValue);
  }
  return resolveUnit(v.toString());
}
