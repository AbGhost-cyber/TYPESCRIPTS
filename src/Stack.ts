type StackOrNull<T> = T | null;

//stack uses last in first out
interface Stack<T> {
  push(value: T);
  pop(): StackOrNull<T>;
  peek(): StackOrNull<T>;
}

class StackImpl<T> implements Stack<T> {
  #storage: T[] = [];

  push(value: T) {
    this.#storage.push(value);
  }
  pop(): T {
    if (this.isEmpty()) return null;
    return this.#storage.pop();
  }
  count(): number {
    return this.#storage.length;
  }

  //look at the top most element without mutation
  peek(): T {
    if (this.isEmpty()) return null;
    return this.#storage[this.count() - 1];
  }
  isEmpty(): boolean {
    return this.#storage.length === 0;
  }
  printStack(): string {
    var reversedList = this.#storage.map(this.#storage.pop, [...this.#storage]);
    let build = `-----Top----`;
    reversedList.forEach((item) => (build += `\n${item}`));
    build += `\n----------`;
    return build;
  }

  static create<T>(arr: T[]): StackImpl<T> {
    const stack = new StackImpl<T>();
    arr.forEach((item) => {
      stack.push(item);
    });
    return stack;
  }
}

const stack = new StackImpl<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.printStack());
console.log("After popping, " + stack.pop());
console.log(stack.printStack());
