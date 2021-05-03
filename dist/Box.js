var Box = /** @class */ (function () {
    function Box() {
        this.contents = [];
    }
    Box.prototype.add = function (value) {
        this.contents.push(value);
        return this;
    };
    Box.prototype.size = function () {
        return this.contents.length;
    };
    return Box;
}());
var box = new Box();
box.add(1).add(2).add(3);
console.log(box.size());
box.contents.forEach(function (item) { return console.log(item); });
