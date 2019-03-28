import { merge } from "./merge";
import { kv } from "./kv";

export function normalizeObject(subject) {
  if (subject == null) {
    return subject;
  }
  return Object.keys(subject).reduce(
    (result, key) =>
      subject[key] == null ? result : merge(result, kv(key, subject[key])),
    {}
  );
}
