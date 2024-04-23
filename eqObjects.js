/**
 *
 * eqObjects takes in 2 objects and checks to see if the both objects have identical keys and values. Returns true if both objects are identical, otherwise false if not
 *
 */


const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //Checks if current key-value pair are arrays in both objects
  // If it is, call eqArrays
  // If not, check if current key-value pair have the same key and value for both objects
  // If not, return false
  // Return true if all the key-value pairs have identical keys and value after the loop
  
  for (let keys of Object.keys(object1)) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      return eqArrays(object1[keys], object2[keys]);
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false



/*
two objects are equal when:

    They have the same number of keys
    The value for each key in one object is the same as the value for that same key in the other object

 */

/*
Possible Solution 2: Primitive as Values
  // for (let key in object1) {
  //   if (object2[key]) {
  //     if (object1[key] !== object2[key]) {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // } return true;

*/