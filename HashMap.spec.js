const HashMap = require("./HashMap");

describe("HashMap", () => {
  test("sets a key", () => {
    expect(new HashMap().set("john", "smith").get("john")).toBe("smith");
  });

  test("overwrites a key", () => {
    expect(new HashMap().set("john", "smith").set("john", "fury").get("john")).toBe("fury");
  });

  test("checks if a key is set", () => {
    expect(new HashMap().set("john", "smith").set("john", "fury").has("john")).toBe(true);
  });
 
  test("checks if a key is not set", () => {
    expect(new HashMap().set("john", "smith").has("james")).toBe(false);
  });

  test("removes a set key ", () => {
    expect(new HashMap().set("john", "smith").remove("john")).toBe(true);
  });

  test("doesnt remove a non-existent key ", () => {
    expect(new HashMap().set("john", "smith").remove("james")).toBe(false);
  });





  
});
