/**
 *
 * assertObjectsEqual() function takes in 2 objects checks to see if the objects are equal. If it is, the objects are outputted along with an assertion message displaying a if it passed or failed
 *
 *
 */


// ASSERT OBJECTS EQUAL function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(eqObjects(actual,expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// EQUAL ARRAYS Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num = 0; num < arr1.length; num++) {
    if (arr1[num] !== arr2[num]) {
      return false;
    }
  }

  return true;

};

// EQUAL OBJECTS Implementation
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  //Checks if current key-value pair are arrays in both objects
  // If it is, call eqArrays
  // If not, check if current key-value pair have the same key and value for both objects
  // If not, return false
  // Return true if all the key-value pairs have identical keys and value after the loop
  
  for (let keys of keys1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!(eqArrays(object1[keys], object2[keys]))) {
        return false;
      }
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;

};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);


// Console log objects with/without template literals
console.log("\n");
console.log("Console log without template literals: " + "\n" +  "shirtObject: ", shirtObject);
console.log(`\nConsole log using template literals without the inspect() function: \nshirtObject: ${shirtObject}`);

module.exports = assertObjectsEqual;