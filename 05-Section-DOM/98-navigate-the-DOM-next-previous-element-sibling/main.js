// previousElementSibling
// nextElementSibling

const first = document.querySelector('.first');

const second = (first.nextElementSibling.style.color = 'blue');

const last = document.querySelector('#last');

const third = (last.previousElementSibling.style.fontWeight = 'bolder');
