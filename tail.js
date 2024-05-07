// FUNCTION IMPLEMENTATION
/**
 *
 * tail() takes in an array and returns the array without the first element (aka tail)
 */

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;