// exercícios de verificação
/* 1 - No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada. */
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback1, callback2) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  const concatInfos = {
    hello: callback1(userToReturn),
    national: callback2(userToReturn)
  };
  return concatInfos;
};

/* console.log(getUser(userFullName, userNationality).hello);
console.log(getUser(userFullName, userNationality).national); */

assert.strictEqual(getUser(userFullName, userNationality).hello, "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userFullName, userNationality).national, "Ivan is Russian"); // complete a chamada da função de getUser