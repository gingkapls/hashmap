const LinkedList = require("./LinkedList");
const Node = require("./Node");

describe("LinkedList", () => {
  test("prints empty list", () => {
    expect(new LinkedList().toString()).toEqual("null");
  });

  test("constructs list with arbitrary elements", () => {
    expect(new LinkedList(0, 1, 2).toString()).toEqual(
      "( 0 ) -> ( 1 ) -> ( 2 ) -> null"
    );
  });

  test("appends a single value", () => {
    expect(new LinkedList().append(0).toString()).toEqual("( 0 ) -> null");
  });

  test("appends multiple values", () => {
    expect(new LinkedList().append(0).append(1).append(2).toString()).toEqual(
      "( 0 ) -> ( 1 ) -> ( 2 ) -> null"
    );
  });

  test("prepends a single value", () => {
    expect(new LinkedList().prepend(5).toString()).toEqual("( 5 ) -> null");
  });

  test("prepends multiple values", () => {
    expect(
      new LinkedList().prepend(5).prepend(4).prepend(3).toString()
    ).toEqual("( 3 ) -> ( 4 ) -> ( 5 ) -> null");
  });

  test("prepends a value", () => {
    expect(new LinkedList().prepend(5).toString()).toEqual("( 5 ) -> null");
  });

  test("calculates size of empty list", () => {
    expect(new LinkedList().size).toEqual(0);
  });

  test("calculates size of non-zero constructed list ", () => {
    expect(new LinkedList(0, 1, 2).size).toEqual(3);
  });

  test("calculates size with single appended value", () => {
    expect(new LinkedList().append(0).size).toEqual(1);
  });

  test("calculates size with multiple append values", () => {
    expect(
      new LinkedList().append(0).append(1).append(2).append(3).size
    ).toEqual(4);
  });

  test("calculates size with a single prepended value", () => {
    expect(new LinkedList().prepend(0).size).toEqual(1);
  });

  test("calculates size with a multiple prepended value", () => {
    expect(new LinkedList().prepend(0).prepend(1).prepend(2).size).toEqual(3);
  });

  test("gets head of empty list", () => {
    expect(new LinkedList().head).toEqual(null);
  });

  test("gets head of a list with one node", () => {
    expect(new LinkedList(0).head).toEqual(new Node({ value: 0 }));
  });

  test("gets head of a list with multiple nodes", () => {
    expect(new LinkedList(0, 1).head).toEqual(
      new Node({ value: 0, next: new Node({ value: 1 }) })
    );
  });

  test("gets tail of an empty list", () => {
    expect(new LinkedList().tail).toEqual(null);
  });

  test("gets tail of a list with one node", () => {
    expect(new LinkedList(0).tail).toEqual(new Node({ value: 0 }));
  });

  test("gets tail of a list with multiple nodes", () => {
    expect(new LinkedList(0, 1).tail).toEqual(new Node({ value: 1 }));
  });

  test("at() returns null in empty list", () => {
    expect(new LinkedList().at(0)).toEqual(null);
  });

  test("returns last element at out of bounds index", () => {
    expect(new LinkedList(0, 1).at(5)).toEqual(null);
  });

  test("gets element at positive index", () => {
    expect(new LinkedList(0, 1).at(1)).toEqual(new Node({ value: 1 }));
  });

  test("gets element at negative index", () => {
    expect(new LinkedList(0, 1).at(-1)).toEqual(new Node({ value: 1 }));
  });

  test("pops nothing off empty list", () => {
    expect(new LinkedList().pop()).toEqual(null);
  });

  test("pops element off a list with one element", () => {
    expect(new LinkedList(0).pop()).toEqual(new Node({ value: 0 }));
  });

  test("pops element off a list with multiple elements", () => {
    expect(new LinkedList(0, 1).pop()).toEqual(new Node({ value: 1 }));
  });

  test("contains with empty list returns false", () => {
    expect(new LinkedList().contains(0)).toEqual(false);
  });

  test("contains returns true if element is present", () => {
    expect(new LinkedList(0, 1, 2).contains(1)).toEqual(true);
  });

  test("contains returns false if element is not present", () => {
    expect(new LinkedList(0, 1, 2).contains(5)).toEqual(false);
  });

  test("find in empty list", () => {
    expect(new LinkedList().find(5)).toEqual(null);
  });

  test("find in a list with one element ", () => {
    expect(new LinkedList(0).find(0)).toEqual(0);
  });

  test("find in a list with multiple elements", () => {
    expect(new LinkedList(0, 1, 2).find(2)).toEqual(2);
  });

  test("insert element at 0 index in list", () => {
    expect(new LinkedList(0).insertAt(0, 1).toString()).toEqual(
      "( 1 ) -> ( 0 ) -> null"
    );
  });

  test("insert element at 0 index in an empty list", () => {
    expect(new LinkedList().insertAt(0, 1).toString()).toEqual("( 1 ) -> null");
  });

  test("insert element at arbitrary index in a list", () => {
    expect(new LinkedList(0, 1, 2, 3, 4).insertAt(2, 10).toString()).toEqual(
      "( 0 ) -> ( 1 ) -> ( 10 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null"
    );
  });

  test("remove nothing from empty list", () => {
    expect(new LinkedList().removeAt(0)).toEqual(null);
  });

  test("remove element from a single element list", () => {
    expect(new LinkedList(0).removeAt(0)).toEqual(new Node({ value: 0 }));
  });

  test("remove arbitrary element from a non-empty list", () => {
    expect(new LinkedList(0, 1, 2, 3).removeAt(2)).toEqual(
      new Node({ value: 2 })
    );
  });
});
