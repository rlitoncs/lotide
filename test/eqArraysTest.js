//Require Modules
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
/*
It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day. */
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3","4"]), false); // => should FAIL
assertEqual(eqArrays([], []), true); // should PASS