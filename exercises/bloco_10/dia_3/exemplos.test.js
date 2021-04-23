// const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
const data = require('./exemplo');
// let { numberRandom, lowercase } = data;

describe('test examples', () => {
  test('test number random', () => {
    data.numberRandom = jest
    .fn() // simulando a função principal
    // .mockReturnValue(8) // retorna o valor estipulado
    .mockImplementation((a, b) => a * b) // criando uma nova lógica para a função

    expect(data.numberRandom(2, 4)).toBe(8); // jest
    expect(data.numberRandom).toHaveBeenCalled(); // verifica se a função foi chamada // mock
    expect(data.numberRandom).toHaveBeenCalledTimes(1) // verifica quantas vezes a função foi chamada // mock
    expect(data.numberRandom).toHaveBeenCalledWith(2, 4) // verifica se função foi chamada com os parâmetros especificados //mock
  })
});

describe('test examples 2', () => {
  test('lowercase strings', () => {
    const spyOnLowerCase = jest
      .spyOn(data, 'lowercase')
      .mockImplementation(str => str.toUpperCase())

    expect(spyOnLowerCase('xablau')).toMatch('XABLAU');
    expect(spyOnLowerCase).toHaveBeenCalled();
    expect(spyOnLowerCase).toHaveBeenCalledTimes(1);
    expect(spyOnLowerCase).toHaveBeenCalledWith('xablau');

    data.lowercase.mockRestore();
    
    expect(data.lowercase('XABLAU')).toMatch('xablau')
  })
})

describe('testa a função somar', () => {
  const newSoma = jest
  .spyOn(data, 'somar'); // 1) arquivo onde está a função/ 2) a função que vai ser simulada
  afterEach(newSoma.mockReset);
  test('#somar', async () => {
    //expect(data.somar(3, 4)).resolves.toBe(7);
    //newSoma(4, 4)
    newSoma.mockResolvedValue('deu certo!');
    expect(newSoma(4, 4)).resolves.toBe('deu certo!')
  })
  test('#somar 2', async () => {
    newSoma(1, 2);
    expect(newSoma).toHaveBeenCalled();
    expect(newSoma).toHaveBeenCalledTimes(1);
    expect(newSoma).toHaveBeenCalledWith(1, 2);
    // expect(newSoma(1, 2)).resolves.toBe(3);
  })
})


test('get API', async () => {
  data.getAPI = jest.fn();

  data.getAPI.mockResolvedValue('deu certo');
  expect(data.getAPI()).resolves.toMatch('deu certo');
})

describe('testing function showDog', () => {
  data.showDog = jest.fn();
  afterEach(data.showDog.mockReset);
  test('test resolve showDog', async () => {
    data.showDog.mockResolvedValue('request success');
    data.showDog();
    expect(data.showDog).toHaveBeenCalled();
    expect(data.showDog).toHaveBeenCalledTimes(1);
    expect(data.showDog()).resolves.toBe('request success');
    expect(data.showDog).toHaveBeenCalledTimes(2);
  });
  test('test reject showDog', async () => {
    data.showDog.mockRejectedValue('request failed');
    expect(data.showDog).toHaveBeenCalledTimes(0);
    expect(data.showDog()).rejects.toBe('request failed');
    expect(data.showDog).toHaveBeenCalledTimes(1);
  });
});