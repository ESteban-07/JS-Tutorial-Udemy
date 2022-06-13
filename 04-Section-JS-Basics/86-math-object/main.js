// Math
// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.12222;
// const result = Math.ceil(number);

// const number = 25;
// const result = Math.sqrt(number);

// const result = Math.PI;

// const result = Math.min(4, 5, 6, 7, 9);

// const result = Math.max(4, 5, 6, 7, 9, 100, 200, 1000);

const result = () => Math.floor(Math.random() * 11);

const arr = [];
for (let i = 0; i < 30; i++) {
    arr.push(result());
}

const newArr = [...new Set(arr)].sort((a, b) => a - b);

console.log(newArr);
