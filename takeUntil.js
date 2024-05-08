/**
 *
 * takeUntil() function takes in an array and callback Function and returns a new Array with new content
 */

//takeUntil function implementation
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