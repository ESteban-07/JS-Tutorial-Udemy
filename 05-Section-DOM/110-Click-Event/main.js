// select element
// addEventListener()
// what event, what to do

const heading = document.querySelector('h2');
const text = document.querySelector('p');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    if (heading.classList.contains('blue')) {
        heading.classList.remove('blue');
    } else {
        heading.classList.add('blue');
    }
});

text.addEventListener('mouseenter', function () {
    this.classList.add('red');

    setTimeout(() => {
        this.classList.add('blue');
    }, 2000);
});

text.addEventListener('mouseleave', function () {
    if (this.classList.contains('blue')) {
        this.classList.remove('blue');
    }

    this.classList.remove('red');
});
