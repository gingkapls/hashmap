const Node = class {
  constructor({ value = null, next = null }) {
    this.value = value;
    this.next = next;
  }
};

module.exports = Node;
