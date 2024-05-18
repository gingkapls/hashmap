const HashSet = require("./HashSet");

describe("HashSet", () => {
  test("sets a key", () => {
    expect(new HashSet().set("john").keys()).toEqual(["john"]);
  });

  test("doesnt set a duplicate key", () => {
    expect(
      new HashSet().set("john", "smith").set("john").set("john").keys()
    ).toEqual(["john"]);
  });

  test("checks if a key is set", () => {
    expect(new HashSet().set("john").set("jim").has("john")).toBe(true);
  });

  test("checks if a key is not set", () => {
    expect(new HashSet().set("john", "smith").has("james")).toBe(false);
  });

  test("removes a set key ", () => {
    expect(new HashSet().set("john", "smith").remove("john")).toBe(true);
  });

  test("doesnt remove a non-existent key ", () => {
    expect(new HashSet().set("john", "smith").remove("james")).toBe(false);
  });

  test("gets length of empty set", () => {
    expect(new HashSet().length).toBe(0);
  });

  test("gets length of set with one item", () => {
    expect(new HashSet().set("john").length).toBe(1);
  });

  test("gets length of set with multiple elements", () => {
    expect(new HashSet().set("john").set("jim").length).toBe(2);
  });

  test("gets keys of an empty set", () => {
    expect(new HashSet().keys()).toEqual([]);
  });

  test("gets keys of a set with one element", () => {
    expect(new HashSet().set("john").keys()).toEqual(["john"]);
  });

  test("gets keys of set with multiple elements", () => {
    expect(new HashSet().set("john").set("jim").keys()).toEqual([
      "john",
      "jim",
    ]);
  });

  test("clears an empty set", () => {
    expect(new HashSet().clear().keys()).toEqual([]);
  });

  test("clears a set", () => {
    expect(new HashSet().set("john", "smith").clear().keys()).toEqual([]);
  });

  test("constructs a set with one item", () => {
    expect(new HashSet("john").keys()).toEqual(["john"]);
  });

  test("constructs a set with multiple items", () => {
    expect(new HashSet("john", "smith", "jim", "bob").length).toBe(4);
  });
});
