// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore('element', 'location')
// replaceChild('new', 'old')

const result = document.querySelector('#result');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);

// inserting the bodyDiv before the div#result
document.body.insertBefore(bodyDiv, result);

const h1 = document.getElementsByTagName('h1')[0];
const h2 = document.createElement('h2');
const h2Text = document.createTextNode('dynamic heading');
h2.appendChild(h2Text);
h2.classList.add('blue');

// inserting h2 tag before the h1 tag
result.insertBefore(h2, h1);

// creating a new element (h6)
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`I'm small heading text`);
smallHeading.appendChild(smallText);
smallHeading.classList.add('red');

// replacing old bodyDiv for new smallHeading
document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
