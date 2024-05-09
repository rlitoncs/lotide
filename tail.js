/**
 *
 * tail(arr) takes in an array and returns the rest of the array without the first element
 * @param {Array} arr
 * @returns {Array}
 */

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;