interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
const shape: Circle = {
  kind: "circle",
  radius: 21,
};

function greeter(fn: (a: string) => void) {
  fn("Hello You");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

let pageNo: string = "25";
let num: number = (pageNo as unknown) as number;
