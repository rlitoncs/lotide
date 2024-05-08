//Required modules
const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

//TEST CASES
let result = countLetters("lighthouse in the house"); //return object

assertEqual(result["l"], 1); // Evaluate to True 1 === 1
assertEqual(result["h"], 4); // Evalute to True 4 === 4
assertEqual(result["e"], 3); // Evalute to True 3 === 3