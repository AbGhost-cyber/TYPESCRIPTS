class State {
    constructor(current) {
        this.current = current;
    }
    update(next) {
        this.current = { ...this.current, ...next };
    }
}
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current);
