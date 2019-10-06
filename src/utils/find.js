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