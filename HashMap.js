const LinkedList = require("./LinkedList");
// const Node = require("./Node");

const HashMap = class {
  #table;
  #primeNumber;
  #length;
  #capacity;
  #loadFactor;

  constructor(...pairs) {
    this.#table = Array.from({ length: 16 });
    this.#capacity = 0;
    this.#loadFactor = 0.75;
    this.#length = 0;
    this.#primeNumber = 31;
    for (const pair of pairs) {
      this.set(pair[0], pair[1]);
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

  set = (key, value) => {
    if (this.#isLoaded()) this.#grow();

    const index = this.#hash(key);
    const bucket = this.#table.at(index);

    if (bucket === undefined) {
      this.#table[index] = new LinkedList({ key, value });
      this.#capacity += 1;
      this.#length += 1;
    } else if (bucket.contains(key)) {
      const listIndex = bucket.find(key);
      bucket.at(listIndex).value = value;
    } else {
      bucket.append({ key, value });
      this.#length += 1;
    }

    return this;
  };

  get = (key) => {
    const index = this.#hash(key);
    const listIndex = this.#table.at(index)?.find(key);

    return this.#table.at(index)?.at(listIndex).value ?? null;
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

  values = () =>
    this.#table.reduce(
      (values, bucket) =>
        bucket === undefined ? values : values.concat(bucket?.values),
      []
    );

  keys = () =>
    this.#table.reduce(
      (keys, bucket) =>
        bucket === undefined ? keys : keys.concat(bucket?.keys),
      []
    );

  entries = () =>
    this.#table.reduce(
      (pairs, bucket) =>
        bucket === undefined ? pairs : pairs.concat(bucket?.entries),
      []
    );

  clear = () => {
    this.#table.fill(null);
    this.#length = 0;
    this.#capacity = 0;
    return this;
  };
};

module.exports = HashMap;
