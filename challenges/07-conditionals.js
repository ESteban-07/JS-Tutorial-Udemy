/*
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name, age (15-25),
status ('resident', 'tourist') keys
3. setup if else, condition where
age must be bigger than 18 and status must be
equal to 'resident'
4. test with both objects
*/

// I can instance this class whenever I want a new object person
class Person {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    vote() {
        if (this.age >= 18 && this.status == 'resident') {
            console.log(`${this.name} you can cast the vote`);
        } else {
            console.log(`${this.name} you are not eligible`);
        }
    }
}

// I made an array with instances of the class Person
// just for traverse it with ease later
const people = [];
people.push(new Person('john', 15, 'resident'));
people.push(new Person('ryan', 28, 'tourist'));
people.push(new Person('anna', 18, 'resident'));

// I made a for-in loop to traverse the array and
// invoke the function vote() for each object
for (let person in people) {
    people[person].vote();
}
