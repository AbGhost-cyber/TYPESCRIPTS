function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
var shape = {
    kind: "circle",
    radius: 21
};
function greeter(fn) {
    fn("Hello You");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
var pageNo = "25";
var num = pageNo;
