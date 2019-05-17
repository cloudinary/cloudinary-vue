export function uniq(subject) {
  return (subject || []).reduce(
    (r, i) => (r.indexOf(i) < 0 ? r.concat([i]) : r),
    []
  );
}
