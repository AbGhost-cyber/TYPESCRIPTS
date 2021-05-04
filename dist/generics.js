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
    const someOtherFunction = (someArg) => { };
    return someOtherFunction;
}
let result = someFunction("");
class GenericNumber {
}
let m = new GenericNumber();
m.zeroValue = 0;
m.add = function (x, y) {
    return x + y;
};
console.log(m.add(1, 2));
let JohnsDrink;
let janesDrink;
