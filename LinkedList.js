const Node = require("./Node.js");

const LinkedList = class {
  #head;
  #size;

  constructor(...items) {
    this.#head = null;
    this.#size = 0;
    for (const item of items) {
      this.append(item);
    }
  }

  #validateIndex = (index) =>
    index >= this.#size
      ? null
      : index < 0
        ? Math.abs((this.#size + index) % this.#size)
        : index;

  append = (item) => {
    if (typeof item !== "object") item = { value: item };
    // List has no nodes
    if (this.#head === null) {
      this.#head = new Node(item);
      this.#size += 1;
      return this;
    }

    let temp = this.#head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node(item);

    this.#size += 1;
    return this;
  };

  prepend = (item) => {
    if (typeof item !== "object") item = { value: item };

    this.#head = new Node({ ...item, next: this.#head });
    this.#size += 1;
    return this;
  };

  toString = () => {
    let temp = this.#head;
    let str = "";
    let item = "";
    while (temp != null) {
      item = Object.values(temp).filter(item => typeof item !== "object").reduce((str, field) => str += field + " ", "").trim()
      str += `( ${item} ) -> `;
      temp = temp.next;
    }
    return `${str}null`;
  };

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    let temp = this.#head;
    while (temp?.next != null) {
      temp = temp?.next;
    }
    return temp;
  }

  get = (field) => {
    const res = [];
    for (let temp = this.#head; temp != null; temp = temp.next) {
      res.push(temp[field]);
    }
    return res;
  };

  entries = (...fields) => {
    const res = [];
    let item;
    for (let temp = this.#head; temp != null; temp = temp.next) {
      item = fields.map(field => temp[field]);
      res.push(item);
    }
    return res;
  }

  at = (index) => {
    index = this.#validateIndex(index);
    if (index === null) return null;

    let temp = this.#head;
    for (let i = 0; i < index; ++i) {
      temp = temp.next;
    }
    return temp;
  };

  pop = () => {
    return this.#size === 0 ? this.removeAt(0) : this.removeAt(this.#size - 1);
  };

  contains = (field, value) => {
    let temp = this.#head;
    while (temp != null) {
      if (temp[field] === value) return true;
      temp = temp.next;
    }
    return false;
  };

  find = (field, value) => {
    let temp = this.#head;
    for (let i = 0; temp != null; ++i) {
      if (temp[field] === value) return i;
      temp = temp.next;
    }
    return null;
  };

  // Extra credit
  insertAt = (index, item) => {
    if (typeof item !== 'object') item = { value: item };
    // insert at head
    if (index === 0) {
      this.prepend(item);
      return this;
    }

    index = this.#validateIndex(index);
    if (index === null) return;

    // Attach to head
    if (index === 0) {
      this.prepend(item);
      return this;
    }

    let prev = this.#head;
    for (let i = 1; i < index; ++i) {
      prev = prev.next;
    }

    const curr = new Node({ ...item, next: prev.next });
    prev.next = curr;

    return this;
  };

  removeAt = (index) => {
    index = this.#validateIndex(index);
    if (index === null) return null;

    // remove Head
    if (index === 0) {
      const res = this.#head;
      this.#head = this.#head.next;
      this.#size -= 1;
      return res;
    }

    let prev = this.#head;

    for (let i = 1; i < index; ++i) {
      prev = prev.next;
    }
    const res = prev.next;
    res.next = null;
    prev.next = prev.next.next;
    this.#size -= 1;

    return res;
  };
};

module.exports = LinkedList;
