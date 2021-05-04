class QueueImpl {
    constructor() {
        this.queueList = [];
    }
    enqueue(value) {
        this.queueList.push(value);
        return true;
    }
    dequeue() {
        if (this.isEmpty())
            return null;
        return this.queueList.shift();
    }
    peek() {
        if (this.isEmpty())
            return null;
        return this.queueList[0];
    }
    isEmpty() {
        return this.queueList.length === 0;
    }
    stringify() {
        return this.queueList.toString();
    }
    //create queue from a normal list
    static create(arr) {
        const queue = new QueueImpl();
        arr.forEach((item) => {
            queue.enqueue(item);
        });
        return queue;
    }
}
//support function
function queueOf(...elements) {
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
