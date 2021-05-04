type QueueOrNull<T> = T | null;

/*
 * queue uses fifo- first in , first out
 */
interface Queue<T> {
  enqueue(value: T): boolean;
  dequeue(): QueueOrNull<T>;
  peek(): QueueOrNull<T>;
}

class QueueImpl<T> implements Queue<T> {
  private queueList: T[] = [];

  enqueue(value: T): boolean {
    this.queueList.push(value);
    return true;
  }
  dequeue(): T {
    if (this.isEmpty()) return null;
    return this.queueList.shift();
  }

  peek(): T {
    if (this.isEmpty()) return null;
    return this.queueList[0];
  }
  isEmpty(): boolean {
    return this.queueList.length === 0;
  }
  stringify(): string {
    return this.queueList.toString();
  }
  //create queue from a normal list
  static create<T>(arr: T[]): QueueImpl<T> {
    const queue = new QueueImpl<T>();
    arr.forEach((item) => {
      queue.enqueue(item);
    });
    return queue;
  }
}
//support function
function queueOf<T>(...elements: T[]): Queue<T> {
  return QueueImpl.create(elements);
}

// const queue = new QueueImpl<string>();
// queue.enqueue("John");
// queue.enqueue("Jeremiah");
// queue.enqueue("Joseph");
// queue.enqueue("Jacob");
// console.log(`before serving ${queue.stringify()}`);
// queue.dequeue();
// console.log(`after serving ${queue.stringify()}`);

// const myArr: string[] = ["Ab", "Dremo", "phillip", "paul", "josh"];
// const queue = queueOf("Ab", "Dremo", "phillip", "paul", "josh");
// console.log(queue.stringify());


// var queue = QueueImpl.create(myArr);
// console.log(queue.stringify());
// console.log(queue.dequeue());
