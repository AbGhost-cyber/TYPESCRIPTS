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
