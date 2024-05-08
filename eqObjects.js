/**
 *
 * eqObjects takes in 2 objects and checks to see if the both objects have identical keys and values. Returns true if both objects are identical, otherwise false if not
 *
 */

const eqArrays = require("./eqArrays");

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
       if(!(eqArrays(object1[keys], object2[keys]))){
        return false;
       }
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;

};

module.exports = eqObjects;

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