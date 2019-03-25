import { merge } from "./merge";
import { kv } from "./kv";

export function formatObject(subject, instructions) {
  if (subject == null && Object.keys(instructions).length === 0) {
    return subject;
  }

  return Object.keys(subject).reduce(
    (result, key) =>
      key in instructions
        ? merge(result, kv(key, instructions[key](subject[key])))
        : merge(result, kv(key, subject[key])),
    {}
  );
}
