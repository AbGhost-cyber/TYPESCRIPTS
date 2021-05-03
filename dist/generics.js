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
var longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray);
