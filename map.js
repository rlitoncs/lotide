/**
 *
 *map() function takes in an array and a callback function returns a new array with new content
 *
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