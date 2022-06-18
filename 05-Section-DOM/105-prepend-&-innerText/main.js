// prepend method: inserst element in front of another element
// innerText property: makes easier to write text inside a tag

const heading = document.createElement('h2');
heading.innerText = `I'm a dynamic heading`;
document.body.prepend(heading);
