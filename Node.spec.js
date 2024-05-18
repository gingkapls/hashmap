const Node = require("./Node");

describe("Node", () => {
  test("creates a node with no fields", () => {
    expect(new Node().data).toBe(undefined);
  });

  test("creates a node with single data field", () => {
    expect(new Node({ data: "hello" }).data).toBe("hello");
  });

  test("creates a node with a next and no data field", () => {
    expect(new Node({ next: "test" }).data).toBe(undefined);
  });

  test("creates a node with two data fields", () => {
    expect(new Node({ key: 5, value: "hi" }).key).toBe(5);
  });

  test("creates a node with two data fields 2", () => {
    expect(new Node({ key: 5, value: "hi" }).value).toBe("hi");
  });
});
