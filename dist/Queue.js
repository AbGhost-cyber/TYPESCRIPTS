var QueueImpl = /** @class */ (function () {
    function QueueImpl() {
        this.queueList = [];
    }
    QueueImpl.prototype.enqueue = function (value) {
        this.queueList.push(value);
        return true;
    };
    QueueImpl.prototype.dequeue = function () {
        if (this.isEmpty())
            return null;
        return this.queueList.shift();
    };
    QueueImpl.prototype.peek = function () {
        if (this.isEmpty())
            return null;
        return this.queueList[0];
    };
    QueueImpl.prototype.isEmpty = function () {
        return this.queueList.length === 0;
    };
    QueueImpl.prototype.stringify = function () {
        return this.queueList.toString();
    };
    return QueueImpl;
}());
var queue = new QueueImpl();
queue.enqueue("John");
queue.enqueue("Jeremiah");
queue.enqueue("Joseph");
queue.enqueue("Jacob");
console.log("before serving " + queue.stringify());
queue.dequeue();
console.log("after serving " + queue.stringify());
