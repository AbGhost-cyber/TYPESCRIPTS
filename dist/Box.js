class Box {
    constructor() {
        this.contents = [];
    }
    add(value) {
        this.contents.push(value);
        return this;
    }
    size() {
        return this.contents.length;
    }
}
const box = new Box();
box.add(1).add(2).add(3);
console.log(box.size());
box.contents.forEach((item) => console.log(item));
