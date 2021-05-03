export class MyNode<T> {
  value: T;
  next?: MyNode<T> = null;

  constructor(value: T, next?: MyNode<T>) {
    this.value = value;
    this.next = next;
  }

  toString(): string {
    if (this.next != null) {
      return `${this.value}->${this.next.toString()}`;
    } else {
      return `${this.value}`;
    }
  }
}

