export class MyNode {
    constructor(value, next) {
        this.next = null;
        this.value = value;
        this.next = next;
    }
    toString() {
        if (this.next != null) {
            return `${this.value}->${this.next.toString()}`;
        }
        else {
            return `${this.value}`;
        }
    }
}
