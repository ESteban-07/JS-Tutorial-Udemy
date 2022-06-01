/*
## Strings #8

1. create function fullName
2. accpet two parameters "firstName", "lastName"
3. add them together (concat) and return result
in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter
*/

// Step 1 - 5
function fullName(firstName, lastName) {
    const result = `${firstName} ${lastName}`;
    return result.toUpperCase();
}
console.log(fullName('Steven', 'Elijah'));

// Step 6 - 7
// I create the class Person to instance new objects
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        const result = `${this.firstName} ${this.lastName}`;
        return result.toUpperCase();
    }
}

// I made an array to store intanced objects
const people = [];
people.push(new Person('Steven', 'Elijah'));
people.push(new Person('Jonh', 'Peter'));
people.push(new Person('Anna', 'Peters'));

// With for-of loop I can iterate over the array of objects
for (let person of people) {
    // Destructuring the object properties of each object
    const { firstName, lastName } = person;
    // Log fullName properly no matter the order of names
    console.log(person.fullName({ lastName, firstName }));
}
