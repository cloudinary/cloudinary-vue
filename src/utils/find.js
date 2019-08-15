export function find(subject, predicate) {
  if (!(subject instanceof Array)) {
    throw new Error(`find 1st arg must be Array, is: ${typeof subject}`);
  }
  for (let i = 0, l = subject.length; i < l; i++) {
    if (predicate(subject[i])) {
      return subject[i];
    }
  }
}
