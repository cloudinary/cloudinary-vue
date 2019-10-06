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
  