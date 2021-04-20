const { obj1, obj2, obj3 } = require('../src/exercicio_parte1');
const { test, expect } = require('@jest/globals');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  test('Verificar Obj1 e Obj2', () => {
    expect(obj1).toEqual(obj2)
  })

  test('Verificar Obj3', () => {
    expect(obj3).not.toHaveProperty('title', 'My Title')
  })
})