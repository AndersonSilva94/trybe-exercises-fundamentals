const { test, expect } = require('@jest/globals');
const { myRemoveWithoutCopy } = require('../src/exercicio_parte1');

describe('Testa se o array retorna um array sem item', () => {
  test('Testa se myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  test('Testa se myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se o array passado por parâmetro sofreu alterações', () => {
    const array = [5, 6, 7, 8];
    myRemoveWithoutCopy(array, 5);
    expect(array).toEqual([6, 7, 8])
  });

  test('Teste se myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})