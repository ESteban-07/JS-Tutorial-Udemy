// Arrays. Functions and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
    name: 'john',
    lastName: 'petters',
    age: 25,
    education: false,
    married: true,
    siblings: ['anna', 'susan', 'peter'],
    greeting() {
        console.log(`Hello my name is ${this.name}`);
    },
};

person.name = 'bob';
const { name, lastName, age } = person;
console.log(name, lastName, age);
person.greeting();
