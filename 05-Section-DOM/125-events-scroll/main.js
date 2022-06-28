/*
Scroll Event - on element or document

window.addEventListener('scroll', function() {
    console.log(window.scrollY + 'px');
    console.log(window.scrollX + 'px');
});

document

scrollY - returns the number of pixels the document is currently
scrolled along the vertical axis (pageYOffset - deprecated)

scrollX - returns the number of pixels scrolled along the
horizontal axis (pageXOffset - deprecated)
*/

window.addEventListener('DOMContentLoaded', function () {
    const postionX = document.getElementById('X');
    const positionY = document.getElementById('Y');

    postionX.classList.add('styleX');
    positionY.classList.add('styleY');
});

window.addEventListener('scroll', function () {
    const postionX = document.getElementById('X');
    const positionY = document.getElementById('Y');

    postionX.textContent = `${window.scrollX}px`;
    positionY.textContent = `${window.scrollY}px`;
});
