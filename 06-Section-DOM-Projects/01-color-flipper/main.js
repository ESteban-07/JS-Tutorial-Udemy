// DOM elements
const demo = document.querySelector('#demo');
const btnRandom = document.querySelector('#btn-random');
const btnHex = document.querySelector('#btn-hex');
const btnReset = document.querySelector('#btn-reset');

// Event Listeners
btnRandom.addEventListener('click', randomBackground);
btnHex.addEventListener('click', hexadecimalBackground);
btnReset.addEventListener('click', defaultBackground);

// Functions
function randomBackground() {
    const randomColors = ['Red', 'Green', '#F15025', 'Rgba(133,122,200)'];
    const randomColor = randomColors[randomNumber(randomColors)];

    demo.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
}

function hexadecimalBackground() {
    const hexCode = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ];

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexCode[randomNumber(hexCode)];
    }

    demo.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

function defaultBackground() {
    document.body.style.backgroundColor = 'transparent';
    demo.innerHTML = 'Default';
}

const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
};
