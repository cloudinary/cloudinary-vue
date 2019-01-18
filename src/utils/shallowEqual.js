import { uniq } from "./uniq";

export function shallowEqual(subjectA, subjectB) {
  if (subjectA === null && subjectB === null) {
    return true;
  }
  if (subjectA === undefined && subjectB === undefined) {
    return true;
  }
  if (subjectA == null && subjectB == null) {
    return false;
  }
  if (subjectA == null && subjectB != null) {
    return false;
  }
  if (subjectA != null && subjectB == null) {
    return false;
  }
  const allKeys = uniq(
    subjectA == null ? [] : Object.keys(subjectA),
    subjectB == null ? [] : Object.keys(subjectB)
  );
  for (let i = 0; i < allKeys.length; i++) {
    const k = allKeys[i];
    if (subjectA[k] !== subjectB[k]) {
      return false;
    }
  }
  return true;
}
