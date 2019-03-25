import { merge } from "./merge";
import { kv } from "./kv";

export function pick(subject, allowed) {
  if (subject == null) {
    return subject;
  }
  return (allowed || []).reduce(
    (result, key) =>
      key in subject ? merge(result, kv(key, subject[key])) : result,
    {}
  );
}
