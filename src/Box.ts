interface IBox<Type> {
  contents: Type[];
  add(value: Type): IBox<Type>;
}
class Box<T> implements IBox<T> {
  contents: T[] = [];
  add(value: T): IBox<T> {
    this.contents.push(value);
    return this;
  }
  size(): number {
    return this.contents.length;
  }
}

const box = new Box<number>();
box.add(1).add(2).add(3);
console.log(box.size());
box.contents.forEach((item) => console.log(item));
