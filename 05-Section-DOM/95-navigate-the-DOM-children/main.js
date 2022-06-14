// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including
// whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');

// This method will return even whitespaces
const allChildren = result.childNodes;

console.log(allChildren);

// This method will return only <li></li> tags
const children = result.children;

console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);
