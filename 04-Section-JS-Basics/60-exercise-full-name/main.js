// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
let newArray = [];

for (let name of names) {
    const fullName = `${name} ${lastName}`;
    newArray.push(fullName);
}

console.log(newArray);
