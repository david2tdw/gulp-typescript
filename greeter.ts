class Student {
  fullName: string;
  constructor(public firstName, public middleName, public lastName) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string,
}

function greeter (person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName
}
// function greeter (person: String) {
//   return 'hello ' + person
// }

// let user  = 'tdw1'

// let user  = {
//   firstName: 'jane',
//   lastName: 'user'
// }

let user = new Student('Jane' , 'm', 'User')

document.body.innerHTML = greeter(user)
