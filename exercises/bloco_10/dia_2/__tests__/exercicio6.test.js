const { test } = require('@jest/globals')
const { getAnimal, getAge } = require('../src/exercicio6')

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error.error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array do animal', () => {
      expect.assertions(1);
      return getAge(5).then(animal => {
        expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existe animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAge(10).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});