function create(c) {
    return new c();
}
const w = [];
w.push(1, 2, "4");
const isIdeal = () => {
    var myArray = [];
    for (let i = 0; i < 21; i++) {
        if (i % 15 !== 0) {
            myArray.push(i);
        }
    }
    return myArray;
};
console.log(isIdeal());
