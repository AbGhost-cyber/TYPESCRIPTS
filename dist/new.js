function updateTodo(todo, fieldsToUpdate) {
    return {
        ...todo,
        ...fieldsToUpdate,
    };
}
const todo1 = {
    title: "organize desk",
    description: "Clear clutter",
    completed: false,
    createdAt: 1616161616,
};
const todo2 = updateTodo(todo1, { title: "or" });
const cats = {
    miffy: { age: 10, breed: "persian" },
    boris: { age: 5, breed: "maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
const todo = {
    title: "clean room",
    completed: false,
};
