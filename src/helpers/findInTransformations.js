import { find } from "../utils";

export function findInTransformations(transformations, predicate) {
  if (!transformations) {
    return undefined;
  }
  return find(
    [transformations, ...(transformations.transformation || [])],
    predicate
  );
}
