/**
 *
 * takeUntil(arr, callbackF) takes in an array and a callback function and returns a new array with content, up until it satifies the callback function condition
 * 
 * @param {Array} arr - the array we will use to apply our callback function on
 * @param {Object} callbackF - the callback function we will invoke on the array
 * @returns {Array} - a new array
 */

//takeUntil
const takeUntil = function(arr, callbackF) {
  const result = [];

  // Apply callback function to each item in the array
  // Once callback function returns true, stop looping
  // Otherwise add item to result array
  for (let item of arr) {
    if (callbackF(item)) {
      return result;
    }
    result.push(item);
  }
  return result;

};

module.exports = takeUntil;