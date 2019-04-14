const db = require("../database/index.js");

describe("fetechs all suggestions", () => {
  test("Get all data", done => {
    function callback(data) {
      expect(data.length).not.toBeLessThan(0);
      done();
    }
    db.getDescriptions(1, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(result);
      }
    });
  });
});
