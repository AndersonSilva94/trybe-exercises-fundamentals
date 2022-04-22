const assert = require('assert');

const secondThirdSmallest = (array) => {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
// console.log(secondThirdSmallest(parameter));
assert.ok(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);