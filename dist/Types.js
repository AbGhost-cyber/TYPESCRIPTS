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
let JohnsDrink;
let janesDrink;
function printAll(strs) {
    if (strs && typeof strs === "object") {
        strs.forEach((item) => console.log(item));
    }
    else if (typeof strs === "string")
        console.log(strs);
}
const bool = {};
const person = makeWatchedObject({
    firstName: "Soarise",
    lastName: "Ronan",
    age: 26,
});
person.on("ageChanged", (newValue) => {
    console.log(newValue);
});
