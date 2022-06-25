// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    // unexpected behaviour with arrow functions
    // The 'this' keyword points to the argument of the event object,
    // not the element as with anonymous functions
    console.log(this);
});

// event.currentTarget points to the current element
// that we are attaching the event listener
btn.addEventListener('click', function (event) {
    event.currentTarget.classList.add('blue');
    console.log(event.type);
});

// we can pass the function as a reference and
// the event object will still work
function someFunc(e) {
    e.preventDefault();
}

link.addEventListener('click', someFunc);
