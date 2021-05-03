var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName.concat(this.lastName);
    };
    User.prototype.setFirstName = function (newFirstName) {
        this.firstName = newFirstName;
    };
    return User;
}());
var user = new User("Ab", "Dremo");
user.setFirstName("David");
console.log(user.getFullName());
