const { test, expect } = require('@jest/globals');
//const { describe } = require('yargs');
const sum = require('../src/exercicio1_parte1');

//describe('Testa a função soma', () => {
  test('Testa se os números 4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  test('Testa se os números 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  test('Testa se a função retorna um erro', () => {
    expect(() => sum(4, "5")).toThrow();
  })
  
  test('Testa se a função retorna o erro: parameters must be numbers', () => {
    expect(() => sum(4, "5")).toThrowError(new Error('parameters must be numbers'));
  })
//})