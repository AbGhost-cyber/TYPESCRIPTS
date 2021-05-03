import { MyNode } from "./Node";

class LinkedList<T> {
  private head?: MyNode<T> = null;
  private tail?: MyNode<T> = null;
  private size = 0;

  push(value: T): LinkedList<T> {
    this.head = new MyNode(value, this.head);
    if (this.tail === null) {
      this.tail = this.head;
    }
    this.size++;
    return this;
  }

  append(value: T): LinkedList<T> {
    if (this.isEmpty()) {
      this.push(value);
      return this;
    }
    this.tail.next = new MyNode(value);
    this.tail = this.tail.next;
    this.size++;
    return this;
  }

  nodeAt(index: number): MyNode<T> | null {
    var currentNode = this.head;
    var currentIndex = 0;
    while (currentIndex < index && currentNode !== null) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  insertAfter(value: T, afterNode: MyNode<T>): MyNode<T> {
    if (afterNode == this.tail) {
      this.append(value);
      return this.tail!!;
    }
    const newNode = new MyNode(value, afterNode.next);
    afterNode.next = newNode;

    this.size++;

    return newNode;
  }

  isEmpty(): Boolean {
    return this.size === 0;
  }

  toString(): string {
    if (this.head === null) return "empty list";
    return this.head.toString();
  }
  getSize(): number {
    return this.size;
  }
}

let list = new LinkedList<number>();
list.push(3).push(2).push(1).push(0).append(7).insertAfter(6, list.nodeAt(4));

console.log(list.toString());
console.log(list.getSize());
