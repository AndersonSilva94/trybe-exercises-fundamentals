const assert = require("assert");

const removeVowels = (word) => {
  const characters = word.split('');
  let value = 0;
  const results = [];

  for (let index in characters) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(value += 1);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
// console.log(removeVowels('Dayane'));
assert.ok(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);