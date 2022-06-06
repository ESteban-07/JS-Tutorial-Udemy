// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
    { name: 'bob', age: '20', position: 'developer' },
    { name: 'emma', age: '19', position: 'designer' },
    { name: 'peter', age: '25', position: 'designer' },
    { name: 'elijah', age: '23', position: 'developer' },
    { name: 'susy', age: '30', position: 'the boss' },
    { name: 'anna', age: '35', position: 'the boss' },
];

const youngPeople = people.filter((person) => person.age <= 25);

const sortYoungPeople = youngPeople.sort((a, b) => a.age - b.age);

console.log(sortYoungPeople);

const developers = people.filter((person) => person.position === 'developer');

console.log(developers);
