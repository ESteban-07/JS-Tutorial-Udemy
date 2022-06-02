// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Non-Primitive Data Types (Objects)
// Arrays, Functions, Objects = object
// typeof

/*
When assigning primitive data type value to a variable any
changes are made directly to that value, without affecting
the original value
*/

/*
When assigning non-primitive data type value to a variable is
done by reference so any changes will affect all the reference
*/

/*
Remember: with primitive data types we don't affect the original
value, however, if it is non-primitive then it's a reference so
we are also affecting all the references 
*/

let turtle = 'turtle';
let beer = turtle;
beer = 'beer';

console.log(`The first value is ${turtle}`);
console.log(`The second value is ${beer}`);

let person1 = { name: 'lora' };
// let person2 = person1; // Don't do this

// With (...) can create a copy of an object instead of a reference
let person2 = { ...person1 };
person2.name = 'anna';

console.log(`Name of the first person: ${person1.name}`);
console.log(`Name of the second person: ${person2.name}`);
