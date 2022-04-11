class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  #length;
  #head;
  #data;
  #index;
  constructor() {
    this.#data = {};
    this.#length = 0;
    this.#head = 0;
    this.#index = 0;
  }

  dequeue() {
    if (this.#length === 0) return;
    const temp = this.#data[this.#head];
    delete this.#data[this.#head];
    this.#head += 1;
    this.#length -= 1;
    return temp;
  }

  enqueue(value) {
    this.#data[this.#index] = value;
    this.#length += 1;
    this.#index += 1;
    return this.#length;
  }

  size() {
    return this.#length;
  }
}
