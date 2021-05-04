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

console.log(isIdeal());
