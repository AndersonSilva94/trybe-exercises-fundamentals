const { test } = require('@jest/globals')
const { getUserName } = require('../src/exercicio2')

describe('Testa a função getUserName seja resolvida', () => {
  test('Testa caso a função encontre um 4', async () => {
    const id4 = await getUserName(4);
    expect(id4).toMatch('Mark')
  })
  test('Testa caso a função encontre um 5', async () => {
    const id5 = await getUserName(5)
    expect(id5).toMatch('Paul')
  })
}) 

describe('Testa caso a função retorne um erro', () => {
  test('Testa caso a função encontre um 6', async () => {
    try {
      await getUserName(6)
    } catch(error) {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    }
  })
})