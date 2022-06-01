// Array Properties and Methods
const names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

// Length Property: counts how much items are in the array
console.log(names.length);
console.log(names[names.length - 1]);

// Concat Method: join arrays
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

// Reverse Method: flips over the order of the array
console.log(allNames.reverse());

// We can use spread operator (...) instead of concat
console.log([...names, ...lastNames]);
console.log([...names, ...lastNames].reverse());

// Unshift Method: inserts an element at the beggining of the array
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

// Shift Method: removes the first item of the array
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

// Push Method: inserts a new element at the end of the array
allNames.push('pineapple');
allNames.push('pear');
console.log(allNames);

// Pop Method: removes last item of the array
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

// Slice Method: returns a copy of a section of an array
console.log(allNames.slice(4, 6));

// Splice Method: Removes elements from an array and, if necessary,
// inserts new elements in their place, returning the deleted elements.
// It mutates original array
const specificNames = allNames.splice(4, 8, 'anna', 'susy', 'peter');
console.log(specificNames);
console.log(allNames);
