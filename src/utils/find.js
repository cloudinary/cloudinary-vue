export function find(subject, predicate) {
  let result = null;
  if (!(subject instanceof Array)) {
    throw new Error(`find 1st arg must be Array, is: ${typeof subject}`);
  }
  subject.forEach(i => {
    if (!result && predicate(i)) {
      result = { value: i };
    }
  });
  return result ? result.value : undefined;
}
