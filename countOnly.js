/**
 * 
 * countOnly(allItems, itemsToCount) takes in an array of items and a itemsToCount object. The array counts only the items that need to be counted for in itemsToCount object, then returns a new object 
 * 
 * @param {Array} allItems - an array that we need to look through
 * @param {Object} itemsToCount - an object specifying what to count
 * @returns {Object} - shows the items that were counted for
 */

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

  // Check if the current item is in the itemsToCount
  // If not, ignore it and go to the next item
  // If the item is found, check if it exists in the results object
  // If it doesn't exist, add the item to the object with a value of 1
  
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;