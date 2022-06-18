// remove
// removeChild

const result = document.querySelector('#result');
// result.remove();

const heading = result.querySelector('h1');

result.removeChild(heading);

// appending new heading inside div#result
const newHeading = document.createElement('h2');
newHeading.innerText = `I'm a new heading`;
result.appendChild(newHeading);

const anotherHeading = document.createElement('h3');
anotherHeading.innerText = `I'm another heading`;
result.prepend(anotherHeading);

const paragraph = document.createElement('p');
paragraph.innerText = 'a paragraph';
paragraph.setAttribute('style', 'color: green');
result.replaceChild(paragraph, newHeading);
