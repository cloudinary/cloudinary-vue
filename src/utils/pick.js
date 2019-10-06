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