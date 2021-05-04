class User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName.concat(this.lastName);
  }
  setFirstName(newFirstName: string): void {
    this.firstName = newFirstName;
  }
}
let user = new User("Ab", "Dremo");
user.setFirstName("David");
console.log(user.getFullName());


