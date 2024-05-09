//Required modules
const assert = require("chai").assert;
const countLetters = require("../countLetters");

let result = countLetters("lighthouse in the house"); //return object
//TEST CASES

describe("#countLetters", () => {

  //letter l
  it("should return 1 occurence for letter 'l'", () => {
    assert.strictEqual(result["l"], 1);
  });

  //letter h
  it("should return 4 occurence for letter 'h'", () => {
    assert.strictEqual(result["h"], 4);
  });

  //letter e
  it("should return 3 occurence for letter 'e'", () => {
    assert.strictEqual(result["e"], 3);
  });

  //Letter does not exist
  it("should return undefined for non-existent letter", () => {
    assert.strictEqual(result["z"], undefined);
  });
});
