//Require Modules
const assert = require("chai").assert;
const findKey = require("../findKey");

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

console.log(`result object:\n  {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
}\nCallback Function: (x) => x.stars === 2 `)


//TEST CASES
describe("#findKeyTest", () => {
  it("should return the key 'noma'", () => {
    assert.strictEqual(result, "noma");
  })
})
