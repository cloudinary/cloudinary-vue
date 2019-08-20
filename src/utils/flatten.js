export function flatten(subject) {
  if (subject == null) {
    return subject;
  }
  const result = [];
  for (let i = 0; i < subject.length; i++) {
    if (Array.isArray(subject[i])) {
      result.push(...subject[i]);
    } else {
      result.push(subject[i]);
    }
  }
  return result;
}
