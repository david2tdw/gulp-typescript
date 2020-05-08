var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
// function greeter (person: String) {
//   return 'hello ' + person
// }
// let user  = 'tdw1'
// let user  = {
//   firstName: 'jane',
//   lastName: 'user'
// }
var user = new Student('Jane', 'm', 'User');
document.body.innerHTML = greeter(user);
