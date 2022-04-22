const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (array) => {
  let sumTotal = 0;
  for (let index in array) {
    sumTotal += array[index];
  }
  return sumTotal
}

// console.log(sumAllNumbers([9, 23, 10, 3, 8]))

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);