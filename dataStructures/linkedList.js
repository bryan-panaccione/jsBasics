class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  state = {
    count: 0,
  };

  constructor() {
    this.head = null;
  }

  prepend(data) {
    let newNode = new Node(data);
    // the next pointer of new node is current front of list
    newNode.next = this.head;
    // now that new node pointer is set to a specific node, change head to new node
    this.head = newNode;
    //this.count += 1  mess with count state in all functions then just return it in size function
    //this returns the new head of the linked list
    return this.head;
  }

  append(data) {
    let newNode = new Node(data);

    // if head is null (empty list) head becomes this new node, first in linked list
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    //to find tail, let tail equal head, then set it to next, next until next is null
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    //tail is now the very last in the list
    tail.next = newNode;
    return this.head;
  }

  size() {
    let count = 1;
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
      count++;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  remove() {
    this.head = this.head.next;
    return this.head;
  }

  print() {
    let currentEl = this.head;
    console.log(currentEl.data);
    while (currentEl.next !== null) {
      currentEl = currentEl.next;
      console.log(currentEl.data);
    }
  }

  reverse() {
    if (this.head) {
      let previous = this.head;
      let current = this.head;
      let next = this.head.next;
    } else {
      return "No list";
    }
  }
}

let list = new LinkedList();

console.log("++++++++++++++++++++++ Original List / prepend");
list.prepend(5);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
list.print();
console.log("++++++++++++++++++++++ append 6");
list.append(6);
list.print();
console.log("++++++++++++++++++++++ gethead");
console.log(list.getHead());
console.log("++++++++++++++++++++++ count");
console.log(list.size());
console.log("++++++++++++++++++++++ remove");
console.log(list.remove().data, "is new head");
console.log("++++++++++++++++++++++ new count");
console.log(list.size());

//console.log();
