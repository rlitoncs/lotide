/**
 * 
 * middle(arr) will take in an array and returns an array of the middle-most element(s) of the given array
 *
 * @param {Array} sourceArr - the array we will search through
 * @returns {Array} - returns middle-most element(s)
 * 
 * Note*: any array with 2 elements or less will return an empty array
 */

// MIDDLE Function Implementation
const middle = function(sourceArr) {
  //Case 1: Less than 2 elements
  if (sourceArr.length <= 2) return [];
  
  // Case 2: More than 2 elements
  // a) remove 1 element if sourceArr length is odd
  if (sourceArr.length % 2 === 1) {
    return [sourceArr[(sourceArr.length - 1) / 2]];
  }
  
  // b) remove 2 elements if sourceArr length is even
  return [sourceArr[(sourceArr.length / 2) - 1], sourceArr[sourceArr.length / 2]];
  
};

module.exports = middle;