// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'location')

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

console.log(result.children);
