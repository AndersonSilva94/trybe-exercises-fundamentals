const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
  const arrayLength = [];
  for (let index in array) {
    let lengths = array[index].length
    arrayLength.push(lengths);
  }
  return arrayLength
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
// console.log(wordLengths(words))

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);