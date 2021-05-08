interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type MyPartial<T> = { [I in keyof T]?: T[I] };
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type MyOmit<T, O extends keyof T> = {
  [P in Exclude<keyof T, O>]: T[P];
};

type MyExclude<T, U> = T extends U ? never : T;

type s = MyExclude<"a" | "b", "b">;

function updateTodo(todo: Todo, fieldsToUpdate: MyPartial<Todo>): Todo {
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
//console.log(todo2);

interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "persian" },
  boris: { age: 5, breed: "maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

type TodoPreview = MyPick<Todo, "title" | "completed">;
type TodoPreview1 = MyOmit<Todo, "description">;

const todo: TodoPreview = {
  title: "clean room",
  completed: false,
};
