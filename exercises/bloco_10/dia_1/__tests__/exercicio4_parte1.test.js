const { test, expect } = require('@jest/globals');
const { myFizzBuzz } = require('../src/exercicio_parte1');

describe('Testa a função myFizzBuzz', () => {
  test('Testa se um número divisível por 3 e 5 tem retorno esperado', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  test('Testa se um número divisível por 3 tem o retorno esperado', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  test('Testa se um número divisível por 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(10)).toMatch('buzz')
  });

  test('Testa se um número que não é divisível por 3 ou 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(13)).toBe(13)
  });

  test('Testa se um parâmetro que não é um número tem retorno esperado', () => {
    expect(myFizzBuzz('string')).toBeFalsy();
  })
})