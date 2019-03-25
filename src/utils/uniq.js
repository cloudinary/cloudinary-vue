export function uniq(subjectA, subjectB) {
  return (subjectA || [])
    .concat(subjectB || [])
    .reduce((r, i) => (r.indexOf(i) < 0 ? r.concat([i]) : r), []);
}
