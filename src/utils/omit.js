import { merge } from "./merge";
import { kv } from "./kv";

export function omit(subject, disallowed) {
  if (subject == null) {
    return subject;
  }
  return Object.keys(subject).reduce(
    (result, key) =>
      (disallowed || []).indexOf(key) < 0
        ? merge(result, kv(key, subject[key]))
        : result,
    {}
  );
}
