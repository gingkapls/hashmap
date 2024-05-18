const Node = class {
  constructor({ next = null, ...data } = {}) {
    // why is null an object?
    for (const [k, v] of Object.entries(data)) {
      this[k] = v;
    }
    this.next = next;
  }
};

module.exports = Node;
