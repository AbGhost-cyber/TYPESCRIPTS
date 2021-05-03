"use strict";
exports.__esModule = true;
exports.MyNode = void 0;
var MyNode = /** @class */ (function () {
    function MyNode(value, next) {
        this.next = null;
        this.value = value;
        this.next = next;
    }
    MyNode.prototype.toString = function () {
        if (this.next != null) {
            return this.value + "->" + this.next.toString();
        }
        else {
            return "" + this.value;
        }
    };
    return MyNode;
}());
exports.MyNode = MyNode;
