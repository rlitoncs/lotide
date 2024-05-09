/**
 *
 *map(arr) takes in an array and a callback function. Returns a new array with the new content as applied from the callback function.
 *
 * @param {Array} arr - the array we will use to apply our callback function on
 * @param {Object} callbackF - the callback function we will invoke on the array
 * @returns {Array} - a new array
 */

//map function implementation
const map = function(arr, callbackF) {
  const results = [];

  //Apply a callback function to every item in the array
  for (let item of arr) {
    results.push(callbackF(item));
  }
  return results;
};

module.exports = map;