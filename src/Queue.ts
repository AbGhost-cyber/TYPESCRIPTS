type QueueOrNull<T> = T | null;

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
}
const queue = new QueueImpl<string>();
queue.enqueue("John");
queue.enqueue("Jeremiah");
queue.enqueue("Joseph");
queue.enqueue("Jacob");
console.log(`before serving ${queue.stringify()}`);
queue.dequeue();
console.log(`after serving ${queue.stringify()}`);
