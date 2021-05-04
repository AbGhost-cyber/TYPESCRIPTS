var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _storage;
class StackImpl {
    constructor() {
        _storage.set(this, []);
    }
    push(value) {
        __classPrivateFieldGet(this, _storage).push(value);
    }
    pop() {
        if (this.isEmpty())
            return null;
        return __classPrivateFieldGet(this, _storage).pop();
    }
    count() {
        return __classPrivateFieldGet(this, _storage).length;
    }
    //look at the top most element without mutation
    peek() {
        if (this.isEmpty())
            return null;
        return __classPrivateFieldGet(this, _storage)[this.count() - 1];
    }
    isEmpty() {
        return __classPrivateFieldGet(this, _storage).length === 0;
    }
    printStack() {
        var reversedList = __classPrivateFieldGet(this, _storage).map(__classPrivateFieldGet(this, _storage).pop, [...__classPrivateFieldGet(this, _storage)]);
        let build = `-----Top----`;
        reversedList.forEach((item) => (build += `\n${item}`));
        build += `\n----------`;
        return build;
    }
    static create(arr) {
        const stack = new StackImpl();
        arr.forEach((item) => {
            stack.push(item);
        });
        return stack;
    }
}
_storage = new WeakMap();
const stack = new StackImpl();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.printStack());
console.log("After popping, " + stack.pop());
console.log(stack.printStack());
