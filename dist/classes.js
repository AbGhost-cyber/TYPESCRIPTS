class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName.concat(this.lastName);
    }
    setFirstName(newFirstName) {
        this.firstName = newFirstName;
    }
}
let user = new User("Ab", "Dremo");
user.setFirstName("David");
//console.log(user.getFullName());
class Params {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
