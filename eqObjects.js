const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// EQUAL OBJECTS Implementation
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (object2[key]) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return false;
    }
  } return true;

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false


/*
two objects are equal when:

    They have the same number of keys
    The value for each key in one object is the same as the value for that same key in the other object

 */