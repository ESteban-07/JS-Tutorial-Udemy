// Callback Functions, Higher Order Functions
// Functions as First Class Objects/Citizens

// Functions are first class objects - stored in a variable
// (expression), passed as an argument to another function
// return from the function (closure)

// Higher Order Function - accepts another function as an
// argument or returns another function as a result

// Callback Function - passed to another function as an
// argument and executed inside that function

// Callback Functions
function morning(name) {
    return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
    return `Good afternoon ${name.repeat(3)}`;
}

// Higher Order Function
function greet(name, cb) {
    const myName = 'john';
    console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon);

// We can use closures to make things legible
function newGreet(greet, name) {
    const myName = 'elijah';
    return function greetPerson() {
        return `Good ${greet} ${name}, my name is ${myName.toUpperCase()}`;
    };
}

const greetMorning = newGreet('morning', 'bobo');
const greetAfternoon = newGreet('afternoon', 'john');
const greetNight = newGreet('night', 'susy');

console.log(greetMorning());
console.log(greetAfternoon());
console.log(greetNight());
