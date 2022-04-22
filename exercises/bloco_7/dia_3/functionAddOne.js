const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
  let newArray = [];
  for (let index in array) {
    let newValue = array[index] + 1;
    newArray.push(newValue);
  }
  return newArray
}

// console.log(addOne([31, 57, 12, 5]))
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);