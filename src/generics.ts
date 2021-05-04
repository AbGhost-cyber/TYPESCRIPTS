function firstElement<T>(arr: T[]): T {
  return arr[0];
}

function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  const someOtherFunction = (
    someArg: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {};
  return someOtherFunction;
}

let result = someFunction("");

type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let m = new GenericNumber<number>();
m.zeroValue = 0;
m.add = function (x, y) {
  return x + y;
};

console.log(m.add(1, 2));

interface StarShip {
  name: string;
  enableHypeJump: boolean;
}

interface StarshipProps {
  color?: "blue" | "red" | "green";
}
//Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type TakeNot<V, C extends keyof any> = Pick<V, Exclude<keyof V, C>>;

type NameOnly = Omit<StarShip, "name">;

type AvailableDrinks = "coffee" | "Tea" | "orange juice" | "lemonade";

let JohnsDrink: AvailableDrinks;

type DrinksJaneDontLike = "coffee" | "orange juice";
let janesDrink: Exclude<AvailableDrinks, DrinksJaneDontLike>;


