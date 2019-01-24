export function find(subject, predicate) {
  let result = null;
  subject.forEach(i => {
    if (!result && predicate(i)) {
      result = { value: i };
    }
  });
  return result ? result.value : undefined;
}
