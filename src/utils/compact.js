export function compact(subject) {
  if (subject == null) {
    return subject;
  }
  if (subject instanceof Array) {
    return subject.reduce((result, item) => {
      if (item != null) {
        result.push(item);
      }
      return result;
    }, []);
  }
  return Object.keys(subject).reduce((result, key) => {
    if (subject[key] != null) {
      result[key] = subject[key];
    }
    return result;
  }, {});
}
