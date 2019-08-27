export { debounce } from "./debounce";

/**
 * Returns free-of-falsy-element array from input `arr`
 * @param {Array} arr 
 */
export const compact = (arr) => arr.filter(Boolean)

/**
 * Returns the first found element of `arr` that satisfies `predicate` check
 * @param {Array} arr 
 * @param {Function} predicate 
 */
export const find = (arr, predicate) => {
  if (!(arr instanceof Array)) {
    throw new Error(`find 1st arg must be Array, is: ${typeof subject}`);
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (predicate(element)) {
      return element;
    }
  }

  return null;
}

/**
 * Returns an array containing all numbers between and including `min` and `max` in a distance of `step` from each other
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step
 */
export const range = (min, max, step) => {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

/**
 * Returns new object contains only `originalObj`'s properities that exist in `keysToPick` 
 * @param {Object} originalObj 
 * @param {Array} keysToPick 
 */
export const pick = (originalObj = {}, keysToPick = []) => {  
  const target = {};
  for (let i = 0; i < keysToPick.length; i++) {
    const key = keysToPick[i];

    if (originalObj.hasOwnProperty(key)) {
      target[key] = originalObj[key];
    }
  }
  return target;
}