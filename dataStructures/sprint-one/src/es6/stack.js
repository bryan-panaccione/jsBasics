class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  #data;
  #length;
  constructor() {
    this.#length = 0;
    this.#data = {};
  }

  pop() {
    if (this.#length === 0) return;
    const temp = this.#data[this.#length - 1];
    delete this.#data[this.#length];
    this.#length -= 1;
    return temp;
  }

  push(value) {
    this.#data[this.#length] = value;
    this.#length += 1;
    return this.#length;
  }

  size() {
    return this.#length;
  }
}
