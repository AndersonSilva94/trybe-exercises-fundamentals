const { test } = require('@jest/globals')
/* const { describe } = require('yargs') */
const { getUserName } = require('../src/exercicio2')

describe('Testa a função getUserName seja resolvida', () => {
  test('Testa caso a função encontre um 4', () => {
    return getUserName(4).then(data => {
      expect(data).toMatch('Mark')
    })
  })
  test('Testa caso a função encontre um 5', () => {
    return getUserName(5).then(data => {
      expect(data).toMatch('Paul')
    })
  })
}) 

describe('Testa caso a função retorne um erro', () => {
  test('Testa caso a função encontre um 6', () => {
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' })
    })
  })
})
