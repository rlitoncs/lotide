
/**
 * Objective: without(source, itemsToRemove) function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
 *
 *
 *
 */

//WITHOUT FUNCTION IMPLEMENTATION
const without = function(sourceArr, itemsToRemove) {
  const withoutArray = [];

  //Iterates over the sourceArr and looks for items that are not being removed and adds it to the new array
  for (let i of sourceArr) {
    if (!itemsToRemove.includes(i)) {
      withoutArray.push(i);
    }
  }

  return withoutArray;

};

module.exports = without;