// forEach
// does not return new array

const people = [
    { name: 'bob', age: '20', position: 'developer' },
    { name: 'peter', age: '25', position: 'designer' },
    { name: 'susy', age: '30', position: 'the boss' },
];

// We can use arrow functions
people.forEach((item) => console.log(item.name.toUpperCase()));

// Or we can pass the callback function as a reference
people.forEach(showPerson);

function showPerson(person) {
    console.log(person.position.toUpperCase());
}
