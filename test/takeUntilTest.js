//Require modules
const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");


//TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1,2,5,7,2]); //PASS
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //PASS