/**
 * 
 * flatten(arr) will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
 * 
 * @param {Array} sourceArr - the array we will flatten
 * @returns {Array} - the new flattened version of the array
 */

// Flatten iterates through the source array and pushes all elements that are not arrays into our new flatten Array. If it comes across an array as an element, it will concatenate that array to our flatten Array.
const flatten = function(sourceArr) {
  let flattenArr = [];


  for (let i of sourceArr) {
    if (!Array.isArray(i)) {
      flattenArr.push(i);
    } else {
      
      flattenArr = flattenArr.concat(i);

    }
  }

  return flattenArr;

};

module.exports = flatten;