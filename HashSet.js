const LinkedList = require("./LinkedList");
// const Node = require("./Node");

const HashSet = class {
  #table;
  #primeNumber;
  #length;
  #capacity;
  #loadFactor;

  constructor(...keys) {
    this.#table = Array.from({ length: 16 });
    this.#capacity = 0;
    this.#loadFactor = 0.75;
    this.#length = 0;
    this.#primeNumber = 31;
    for (const key of keys) {
      this.set(key);
    }
  }

  get length() {
    return this.#length;
  }

  #hash = (key) => {
    let hashCode = 0;
    for (let i = 0; i < key.length; ++i) {
      hashCode =
        (this.#primeNumber * hashCode + key.charCodeAt(i)) % this.#table.length;
    }

    return hashCode;
  };

  #isLoaded = () =>
    this.#capacity / this.#table.length < this.#loadFactor ? false : true;

  #grow = () => {
    const entries = this.entries();
    const newSize = this.#table.length * 2;
    this.#table = Array.from({ length: newSize });

    this.#capacity = 0;
    this.#length = 0;
    entries.forEach((pair) => this.set(pair[0], pair[1]));
    return this;
  };

  set = (key) => {
    if (this.#isLoaded()) this.#grow();

    const index = this.#hash(key);
    const bucket = this.#table.at(index);

    if (bucket === undefined) {
      this.#table[index] = new LinkedList({ key });
      this.#capacity += 1;
      this.#length += 1;
    } else if (bucket.contains(key)) {
      const listIndex = bucket.find(key);
      bucket[listIndex] = key;
    } else {
      bucket.append({ key });
      this.#length += 1;
    }

    return this;
  };

  has = (key) => {
    const index = this.#hash(key);

    // false if undefined
    return this.#table.at(index)?.contains(key) ?? false;
  };

  remove = (key) => {
    const index = this.#hash(key);
    const bucket = this.#table.at(index);

    if (bucket === undefined) return false;

    const listIndex = bucket.find(key);
    if (listIndex === null) return false;

    bucket.removeAt(listIndex);
    this.#length -= 1;
    return true;
  };

  keys = () =>
    this.#table.reduce(
      (keys, bucket) =>
        bucket === undefined ? keys : keys.concat(bucket?.get('key')),
      []
    );

  clear = () => {
    this.#table.fill(undefined);
    this.#length = 0;
    this.#capacity = 0;
    return this;
  };
};

module.exports = HashSet;
