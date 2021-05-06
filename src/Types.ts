function create<T>(c: { new (): T }): T {
  return new c();
}

//distributive
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;

//non distributive
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StrOrNumArr = ToArrayNonDist<string | number>;

const w: StrOrNumArr = [];
w.push(1, 2, "4");
//console.log(w);

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

//CREATE MUTABLES

type CreateMutable<Type> = {
  readonly [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

const isIdeal = () => {
  var myArray: number[] = [];
  for (let i = 0; i < 21; i++) {
    if (i % 15 !== 0) {
      myArray.push(i);
    }
  }
  return myArray;
};

//console.log(isIdeal());

//Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type TakeNot<V, C extends keyof any> = Pick<V, Exclude<keyof V, C>>;

type NameOnly = Omit<StarShip, "name">;

type AvailableDrinks = "coffee" | "Tea" | "orange juice" | "lemonade";

let JohnsDrink: AvailableDrinks;

type DrinksJaneDontLike = "coffee" | "orange juice";
let janesDrink: Exclude<AvailableDrinks, DrinksJaneDontLike>;

type arr<T> = Array<T>;

function printAll(strs: string | string[]) {
  if (strs && typeof strs === "object") {
    strs.forEach((item) => console.log(item));
  } else if (typeof strs === "string") console.log(strs);
}
//printAll(["me", "you", "us"]);

type orNull<Type> = Type | null;
type oneOrMany<Type> = Type | Type[];
type oneOrManyOrNull<Type> = orNull<oneOrMany<Type>>;

//tuples
type StringNumberPair = [string, number];

type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>;

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type arrayOf<T> = [T] extends [any] ? T[] : never;

type Horse = "horse";

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
const bool: OnlyBoolsAndHorses = {};

//remove property from a field

type RemoveField<Type, K extends keyof Type> = {
  [P in keyof Type as Exclude<P, K>]: Type[P];
};

interface EmailPassWordUsers {
  name: string;
  email: string;
  password: string;
}

type ThirdPartyUsers = RemoveField<EmailPassWordUsers, "password">;

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  );
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Soarise",
  lastName: "Ronan",
  age: 26,
});
person.on("ageChanged", (newValue) => {
  console.log(newValue);
});


