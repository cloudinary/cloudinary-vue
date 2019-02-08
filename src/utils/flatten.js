export function flatten(subject) {
  if (subject == null) {
    return subject;
  }
  return [].concat(subject).reduce((result, item) => result.concat(item), []);
}
