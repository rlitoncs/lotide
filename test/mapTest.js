//Require Modules
const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const arrayOfArrays = [['hello', 'there'], ['Second', 'Array'], ['Interesting', 'bear']];
const numbers = [5,10,15];

//TEST CASES
describe("#map", () => {

  //Words
  it("given words ['ground', 'control', 'to', 'major', 'tom'] should return ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, (word) => word[0]),['g', 'c', 't', 'm', 't']);
  });

  //Array of Arrays
  it("given arrayOfArrays [['hello', 'there'], ['Second', 'Array'], ['Interesting', 'bear']] should return  ['hello','Second', 'Interesting']", () => {
    assert.deepEqual(map(arrayOfArrays, (innerArray) => innerArray[0]), ['hello','Second', 'Interesting']);
  });
  
  //Numbers
  it("given numbers [5,10,15] should return [10,20,30]", () => {
    assert.deepEqual(map(numbers, (number) => number * 2), [10,20,30]);
  });

});
