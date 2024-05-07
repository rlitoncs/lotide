
// Require modules
const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE
assertEqual(head([5, 6, 7]), 5); //testing with numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //testing with strings
assertEqual(head(["OneElement"]), "OneElement"); //testing with 1 element
assertEqual(head([]), undefined); //testing with no elements
assertEqual(Array.isArray(head([[]])), true); //testing if first element is an array itself