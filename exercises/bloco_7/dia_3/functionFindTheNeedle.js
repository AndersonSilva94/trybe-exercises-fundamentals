const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (array, word) => {
  let position = -1;
  for (let index in array) {
    if (array[index] === word) {
      position = parseFloat(index);
    } 
  }
  return position;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let output = findTheNeedle(words, 'needle');
let expected = 3;
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
// console.log(output)