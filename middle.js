/**
 * Objective: middle() function will take in an array and return the middle-most element(s) of the given array.
 *
 * middle() takes in an array and returns an array of the middle element
 *
 */

// MIDDLE Function Implementation
const middle = function(sourceArr) {
  //Case 2: Less than 2 elements
  if (sourceArr.length <= 2) return [];
  
  // Case 3: More than 2 elements
  // a) remove 1 element if sourceArr length is odd
  if (sourceArr.length % 2 === 1) {
    return [sourceArr[(sourceArr.length - 1) / 2]]; // wrap the result in another array so it returns an array with the middle elem
  }
  
  // b) remove 2 elements if sourceArr length is even
  // wrap the result in another array so it returns an array with the middle elements
  return [sourceArr[(sourceArr.length / 2) - 1], sourceArr[sourceArr.length / 2]];
  
};

module.exports = middle;