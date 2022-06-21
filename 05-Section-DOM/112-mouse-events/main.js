// click - fires after full action accurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', clickEvent);
btn.addEventListener('mousedown', mousedownEvent);
btn.addEventListener('mouseup', mouseupEvent);

heading.addEventListener('mouseenter', mouseenterEvent);
heading.addEventListener('mouseleave', mouseleaveEvent);

function clickEvent() {
    console.log('You clicked me');
    if (heading.style.color == 'green') {
        heading.style.color = 'black';
    } else {
        heading.style.color = 'green';
    }
}

function mousedownEvent() {
    console.log('down');
    this.style.fontSize = '3rem';
}

function mouseupEvent() {
    console.log('up');
    this.style.fontSize = '1.2rem';
}

function mouseenterEvent() {
    heading.style.fontSize = '4rem';
}

function mouseleaveEvent() {
    heading.style.fontSize = '2rem';
}
