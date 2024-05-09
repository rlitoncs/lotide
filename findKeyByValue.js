/**
 *
 * findKeyByValue(object, value) takes in an object, and a target value, and returns the first key that matches the target value
 *
 * @param {Object} object - the object we will search through
 * @param {*} value - can be of any type
 * @returns {String | undefined} - the first key that was found otherwise undefined
 */

const findKeyByValue = function(object, value) {

  //For..in loop finds all the keys
  for (let key in object) {
    if (object [key] === value) {
      return key;
    }
  }
  
};


module.exports = findKeyByValue;