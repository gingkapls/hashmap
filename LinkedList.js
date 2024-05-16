const Node = require("./Node.js");

const LinkedList = class {
  #head;
  #size;

  constructor(...pairs) {
    this.#head = null;
    this.#size = 0;
    for (const {key, value} of pairs) {
      this.append({key, value});
    }
  }

  #validateIndex = (index) =>
    index >= this.#size
      ? null
      : index < 0
        ? Math.abs((this.#size + index) % this.#size)
        : index;

  append = ({key, value}) => {
    // List has no nodes
    if (this.#head === null) {
      this.#head = new Node({ key, value });
      this.#size += 1;
      return this;
    }

    let temp = this.#head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node({ key, value });

    this.#size += 1;
    return this;
  };

  prepend = ({key, value}) => {
    this.#head = new Node({ key, value, next: this.#head });
    this.#size += 1;
    return this;
  };

  toString = () => {
    let temp = this.#head;
    let str = "";
    while (temp != null) {
      str += `( ${temp.value} ) -> `;
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

  contains = (key) => {
    let temp = this.#head;
    while (temp != null) {
      if (temp.key === key) return true;
      temp = temp.next;
    }
    return false;
  };

  find = (key) => {
    let temp = this.#head;
    for (let i = 0; temp != null; ++i) {
      if (temp.key === key) return temp;
      temp = temp.next;
    }
    return null;
  };

  // Extra credit
  insertAt = ({index, key, value}) => {
    // insert at head
    if (index === 0) {
      this.prepend({key, value});
      return this;
    }

    index = this.#validateIndex(index);
    if (index === null) return;

    // Attach to head
    if (index === 0) {
      this.prepend({key, value});
      return this;
    }

    let prev = this.#head;
    for (let i = 1; i < index; ++i) {
      prev = prev.next;
    }

    const curr = new Node({ key, value, next: prev.next });
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
