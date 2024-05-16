const Node = class {
  constructor({key = null, value = null, next = null }) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
};

module.exports = Node;
