export function pick(subject, allowed) {
  if (subject == null) {
    return subject;
  }
  if (!allowed || !allowed.length) {
    return {};
  }
  const target = {};
  for (let i = 0; i < allowed.length; i++) {
    const key = allowed[i];
    if (key in subject) {
      target[key] = subject[key];
    }
  }
  return target;
}
