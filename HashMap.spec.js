const HashMap = require("./HashMap");

describe("HashMap", () => {
  test("sets a key", () => {
    expect(new HashMap().set("john", "smith").get("john")).toBe("smith");
  });

  test("overwrites a key", () => {
    expect(
      new HashMap().set("john", "smith").set("john", "fury").get("john")
    ).toBe("fury");
  });

  test("get a non-existent key", () => {
    expect(new HashMap().get("john")).toBe(null);
  });

  test("checks if a key is set", () => {
    expect(
      new HashMap().set("john", "smith").set("john", "fury").has("john")
    ).toBe(true);
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

  test("gets length of empty map", () => {
    expect(new HashMap().length).toBe(0);
  });

  test("gets length of map with one item", () => {
    expect(new HashMap().set("john", "smith").length).toBe(1);
  });

  test("gets length of map with multiple elements", () => {
    expect(new HashMap().set("john", "smith").set("jim", "bob").length).toBe(2);
  });

  test("gets values of an empty map", () => {
    expect(new HashMap().values()).toEqual([]);
  });

  test("gets values of a map with one element", () => {
    expect(new HashMap().set("john", "smith").values()).toEqual(["smith"]);
  });

  test("gets values of map with multiple elements", () => {
    expect(
      new HashMap().set("john", "smith").set("jim", "bob").values()
    ).toEqual(["smith", "bob"]);
  });

  test("gets keys of an empty map", () => {
    expect(new HashMap().keys()).toEqual([]);
  });

  test("gets keys of a map with one element", () => {
    expect(new HashMap().set("john", "smith").keys()).toEqual(["john"]);
  });

  test("gets keys of map with multiple elements", () => {
    expect(new HashMap().set("john", "smith").set("jim", "bob").keys()).toEqual(
      ["john", "jim"]
    );
  });

  test("gets entries of an empty map", () => {
    expect(new HashMap().entries()).toEqual([]);
  });

  test("gets entries of a map with one element", () => {
    expect(new HashMap().set("john", "smith").entries()).toEqual([
      ["john", "smith"],
    ]);
  });

  test("gets entries of map with multiple elements", () => {
    expect(
      new HashMap().set("john", "smith").set("jim", "bob").entries()
    ).toEqual([
      ["john", "smith"],
      ["jim", "bob"],
    ]);
  });

  test("clears an empty list", () => {
    expect(new HashMap().set("john", "smith").clear().get("john")).toBe(null);
  });
});
