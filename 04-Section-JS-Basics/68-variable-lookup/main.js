// Variable Lookup
// JS looks up first from the inside of the {} and then hops outside
// It doesn't work the opposite
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
    // const globalNumber = 20;
    const result = num1 + num2 + globalNumber;
    function multiply() {
        // const globalNumber = 100;
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult);
    }
    // console.log(multiplyResult); // not defined
    multiply();
    return result;
}

console.log(add(3, 4));
