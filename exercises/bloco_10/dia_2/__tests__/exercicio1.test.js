const { test, expect } = require('@jest/globals')
const { uppercase } = require('../src/exercicio1')

// exercício
test('Testa que uppercase transforma as letras de uma palavra em maiuscula', (done) => {
  const callback = (str) => {
    expect(str).toBe('XABLAU');
    done();
  };
  uppercase('xablau', callback)
})