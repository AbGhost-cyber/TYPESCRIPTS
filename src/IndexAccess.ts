interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}
type City = User["address"]["city"];
function updatedAddress(id: User["id"], newAddress: User["address"]) {}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let user1 = { name: "john", age: 25 };
var name1 = getProperty(user1, "age");
console.log(name1);

interface MyMouseEvent {
  x: number;
  y: number;
}
interface MyKeyboardEvent {
  key: string;
}
interface EventsMapper {
  click: MyMouseEvent;
  keypress: MyKeyboardEvent;
}

function handlePress<T extends keyof EventsMapper>(
  event: T,
  callback: (e: EventsMapper[T]) => void
) {}
handlePress("keypress", (e) => {});

var emp: [number, string] = [1, "Steve"];
