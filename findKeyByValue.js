/**
 *
 * findKeyByValue takes in an object, and a target value, and returns the key that matches the target value
 *
 */

const findKeyByValue = function(object, value) {

  //For..in loop finds all the keys
  for (let key in object) {
    if (object [key] === value) {
      return key;
    }
  }

  //return the first key that is matched with given value
  //If no key with given value is found, return undefined
};


module.exports = findKeyByValue;