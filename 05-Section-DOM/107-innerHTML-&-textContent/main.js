// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = list.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
                <li>list item</li>
                <li>list item</li>`;

document.body.appendChild(ul);

div.innerHTML = `<p><a href="#">Hello World</a></p>`;
