const data = require('../src/exercicio6');
const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');

describe('test api dog pictures', () => {
  data.fetchDogList = jest.fn();
  afterEach(() => data.fetchDogList.mockReset);
  it('when request was successful', async () => {
    data.fetchDogList.mockResolvedValue('request sucess');
    expect(data.fetchDogList()).resolves.toMatch('request sucess')
  })
  it('when request failed', async () => {
    data.fetchDogList.mockRejectedValue('request failed');
    expect(data.fetchDogList()).rejects.toMatch('request failed')
  })
})