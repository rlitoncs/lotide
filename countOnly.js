/**
 * 
 * countOnly Function takes in an array of Items and counts only the items that need to be counted for in itemsToCount object, then returns a new object with the selected items and it's associated count value 
 * 
 */



const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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

  // console.log(results); Debugging purposes

  //Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
  return results;
};

//array
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;