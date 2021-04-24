// 5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const data = require('../src/exercicio4');
const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');

describe('test function string', () => {
  data.uppercase = jest
    .spyOn(data, 'uppercase')
    .mockImplementation(str => str.toLowerCase());

  test('test function uppercase', () => {
    data.uppercase('XABLAU');
    expect(data.uppercase('XABLAU')).toMatch('xablau');

    data.uppercase.mockRestore()

    data.uppercase('xablau');
    expect(data.uppercase('xablau')).toMatch('XABLAU');
  });
})