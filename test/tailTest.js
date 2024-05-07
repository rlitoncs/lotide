//Require Modules
const assertEqual = require("../assertEqual");
const tail = require("../tail");


//TEST CASES

// Test Case 0: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Array with one element
const result2 = tail([1]);
assertEqual(result2.length, 0);

// Test Case 3: Empty Array
const result3 = tail([]);
assertEqual(result3.length, 0);