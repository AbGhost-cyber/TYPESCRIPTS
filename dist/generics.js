function firstElement(arr) {
    return arr[0];
}
function last(arr) {
    return arr[arr.length - 1];
}
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
function someFunction(value) {
    var someOtherFunction = function (someArg) { };
    return someOtherFunction;
}
var result = someFunction("");
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var m = new GenericNumber();
m.zeroValue = 0;
m.add = function (x, y) {
    return x + y;
};
console.log(m.add(1, 2));
