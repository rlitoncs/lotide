//Require Modules
const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [4,5,6]), ["1", "2", "3"]); // => [ '1', '2', '3' ] nothing to remove
assertArraysEqual(without([],[]), []); // => []




const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case

assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function