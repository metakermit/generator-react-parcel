"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-react-parcel:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app"));
    // .withPrompts({ someAnswer: true });
  });

  it("creates package.json", () => {
    assert.file(["package.json"]);
  });
});
