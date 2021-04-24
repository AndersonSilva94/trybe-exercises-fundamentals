// 3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const data = require('../src/exercicio1');
const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');

describe('test random number 3', () => {
  data.randomNumber = jest.fn();
  afterEach(data.randomNumber.mockReset());
  test('test multiplication', () => {
    data.randomNumber.mockImplementation((a, b, c) => a * b * c);

    data.randomNumber(1, 2, 3);
    expect(data.randomNumber).toHaveBeenCalled();
    expect(data.randomNumber).toHaveBeenCalledTimes(1);
    expect(data.randomNumber(1, 2, 3)).toBe(6);
    expect(data.randomNumber(0, 2, 3)).toBe(0);
  })

  test('test double number', () => {
    data.randomNumber.mockImplementation((a) => a * 2);

    data.randomNumber(4);
    expect(data.randomNumber).toHaveBeenCalled();
    // expect(data.randomNumber).toHaveBeenCalledTimes(1);
    expect(data.randomNumber(5)).toBe(10)
  })
})