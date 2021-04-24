const { test, expect } = require('@jest/globals');
const { getRepos } = require('../src/exercicio4');

//console.log(getRepos())

describe('Consulta url github', () => {
  test('Testa se o respositório 1 consta na url passada', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(repos => {
      expect(repos).toContain('sd-01-week4-5-project-todo-list')
    })
  })

  test('testa se o repositório 2 consta na url passada', () => {
    expect.assertions(1);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(repos => {
      expect(repos).toContain('sd-01-week4-5-project-meme-generator')
  })
  })
})
