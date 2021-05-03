"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.push = function (value) {
        this.head = new Node_1.MyNode(value, this.head);
        if (this.tail === null) {
            this.tail = this.head;
        }
        this.size++;
        return this;
    };
    LinkedList.prototype.append = function (value) {
        if (this.isEmpty()) {
            this.push(value);
            return this;
        }
        this.tail.next = new Node_1.MyNode(value);
        this.tail = this.tail.next;
        this.size++;
        return this;
    };
    LinkedList.prototype.nodeAt = function (index) {
        var currentNode = this.head;
        var currentIndex = 0;
        while (currentIndex < index && currentNode !== null) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    };
    LinkedList.prototype.insertAfter = function (value, afterNode) {
        if (afterNode == this.tail) {
            this.append(value);
            return this.tail;
        }
        var newNode = new Node_1.MyNode(value, afterNode.next);
        afterNode.next = newNode;
        this.size++;
        return newNode;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    LinkedList.prototype.toString = function () {
        if (this.head === null)
            return "empty list";
        return this.head.toString();
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    return LinkedList;
}());
var list = new LinkedList();
list.push(3).push(2).push(1).push(0).append(7).insertAfter(6, list.nodeAt(4));
console.log(list.toString());
console.log(list.getSize());
