import { uniq } from "./uniq";

export function equal(subjectA, subjectB) {
  if (
    (subjectA === null && subjectB === null) ||
    (subjectA === undefined && subjectB === undefined)
  ) {
    return true;
  }

  if (
    ((subjectA === null || subjectB === null) &&
      (subjectA !== null || subjectB !== null)) ||
    ((subjectA === undefined || subjectB === undefined) &&
      (subjectA !== undefined || subjectB !== undefined))
  ) {
    return false;
  }

  if (typeof subjectA === "object" && typeof subjectB === "object") {
    const subjectAKeys = Object.keys(subjectA);
    const subjectBKeys = Object.keys(subjectB);
    if (subjectAKeys.length !== subjectBKeys.length) {
      return false;
    }
    const allKeys = uniq(subjectAKeys, subjectBKeys);
    if (allKeys.length !== subjectAKeys.length) {
      return false;
    }
    for (let i = 0; i < allKeys.length; i++) {
      const k = allKeys[i];
      if (!equal(subjectA[k], subjectB[k])) {
        return false;
      }
    }
    return true;
  }

  return subjectA === subjectB;
}
