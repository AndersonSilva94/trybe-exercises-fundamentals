const assert = require('assert');
const greetPeople = (people) => {
  let greeting = 'Hello ';
  let newArray = []

  for (const person in people) {
    let putz = greeting + people[person];
    newArray.push(putz)
  }
  return newArray;
};

const parameter = greetPeople(['Irina', 'Ashleigh', 'Elsa']);
// console.log(greetPeople(parameter))
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.ok(typeof greetPeople, 'function');
assert.deepStrictEqual(parameter, result);