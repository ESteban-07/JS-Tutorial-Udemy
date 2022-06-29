// DOM elements
const demo = document.querySelector('#demo');
let counter = parseInt(demo.textContent);
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');
const btnIncrease = document.querySelector('#btn-increase');

// Event Listeners
btnDecrease.addEventListener('click', decreaseCounter);
btnReset.addEventListener('click', resetCounter);
btnIncrease.addEventListener('click', increaseCounter);

// Functions
function decreaseCounter() {
    --counter;
    colorCounter(counter);
    return (demo.textContent = counter);
}

function resetCounter() {
    counter = 0;
    colorCounter(counter);
    return (demo.textContent = counter);
}

function increaseCounter() {
    ++counter;
    colorCounter(counter);
    return (demo.textContent = counter);
}

function colorCounter(value) {
    let result;
    if (value < 0) {
        result = demo.style.color = 'red';
    }
    if (value == 0) {
        result = demo.style.color = '#222222';
    }
    if (value > 0) {
        result = demo.style.color = 'green';
    }
    return result;
}
