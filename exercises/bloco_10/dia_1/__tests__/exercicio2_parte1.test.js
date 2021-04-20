const { test, expect } = require('@jest/globals');
const { myRemove } = require('../src/exercicio_parte1');

describe('Testa se o array retorna um array sem item', () => {
  test('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  test('Testa se o array passado por parâmetro não sofreu alteração', () => {
    const array = [5, 6, 7, 8];
    myRemove(array, 5);
    expect(array).toEqual([5, 6, 7, 8])
  })

  test('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
});
