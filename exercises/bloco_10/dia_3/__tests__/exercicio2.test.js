// 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const data = require('../src/exercicio1');
const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');

describe('test random number', () => {
  test('create a new implementation', () => {
    data.randomNumber = jest
    .fn()
    .mockImplementation((a, b) => a / b);

    data.randomNumber(8, 2);
    expect(data.randomNumber).toHaveBeenCalled();
    expect(data.randomNumber).toHaveBeenCalledWith(8, 2)
    expect(data.randomNumber).toHaveBeenCalledTimes(1);
    expect(data.randomNumber(8, 2)).toBe(4);
  })
})