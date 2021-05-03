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

const longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray);
