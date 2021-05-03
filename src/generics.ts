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
