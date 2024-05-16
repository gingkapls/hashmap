const LinkedList = require("./LinkedList");
// const Node = require("./Node");

const HashMap = class {
  #table;
  #primeNumber;
//   #capacity;
//   #loadFactor;

  constructor() {
    this.#table = Array.from({ length: 16 });
    // this.#capacity = 0;
    // this.#loadFactor = 0.75;
    this.#primeNumber = 31;
  }

  hash = (key) => {
    let hashCode = 0;
    for (let i = 0; i < key.length; ++i) {
      hashCode =
        (this.#primeNumber * hashCode + key.charCodeAt(i)) % this.#table.length;
    }

    return hashCode;
  };

  set = (key, value) => {
    const index = this.hash(key);
    if (this.#table.at(index) === undefined) {
      this.#table[index] = new LinkedList({ key, value });
    //   this.#capacity += 1;
    } else if (this.#table.at(index).contains(key)) {
      const listIndex = this.#table.at(index).find(key);
      this.#table.at(index).at(listIndex).value = value;
    } else {
      this.#table.at(index).append({ key, value });
    }

    return this;
  };

  get = (key) => {
    const index = this.hash(key);
    const listIndex = this.#table.at(index).find(key);
    return this.#table.at(index).at(listIndex).value;
  };

  has = (key) => {
    const index = this.hash(key);

    // false if undefined
    return this.#table.at(index)?.contains(key) ?? false;
  };
    
  remove = (key) => {
    const index = this.hash(key);
    const bucket = this.#table.at(index);

    if (bucket === undefined) return false;
      
    const listIndex = bucket.find(key);
    if (listIndex === null) return false;

    bucket.removeAt(listIndex);
    
    return true;
  }
};

module.exports = HashMap;
