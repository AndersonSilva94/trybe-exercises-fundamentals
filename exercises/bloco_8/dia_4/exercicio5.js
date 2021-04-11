const assert = require('assert');

/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
/* console.log(names[0].toLowerCase().split('').filter(letter => letter === 'a').length) */

function containsA() {
  return names.reduce((acc, nome) => {
    return acc + nome.toLowerCase().split('').filter(letter => letter === 'a').length;
  }, 0)
}
// console.log(containsA())
assert.deepStrictEqual(containsA(), 20);