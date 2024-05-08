//Require Modules
const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

//TEST CASES

const words = ["ground", "control", "to", "major", "tom"];
const arrayOfArrays = [['hello', 'there'], ['Second', 'Array'], ['Interesting', 'bear']];
const numbers = [5,10,15];

const results1 = map(words, (word) => word[0]);
const results2 = map(arrayOfArrays, (innerArray) => innerArray[0]);
const results3 = map(numbers, (number) => number*2);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); //PASS
assertArraysEqual(results2, ['hello','Second', 'Interesting']); //PASS
assertArraysEqual(results3, [10,20,30]);// PASS
