//Require modules
const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

//TEST CASES

let result1 = letterPositions("hello"); //return an object
let result2 = letterPositions("lighthouse in the house");

assertArraysEqual(result1['h'], [0]); // PASS
assertArraysEqual(result2['i'], [1, 11]); // PASS