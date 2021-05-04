function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
const shape = {
    kind: "circle",
    radius: 21,
};
function greeter(fn) {
    fn("Hello You");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
let pageNo = "25";
let num = pageNo;
