// const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
const data = require('../src/exercicio1');

describe('test random numbers', () => {
  test('test number 10', () => {
    data.randomNumber = jest
    .fn()
    .mockReturnValue(10);

    data.randomNumber()
    expect(data.randomNumber).toHaveBeenCalled();
    expect(data.randomNumber()).toBe(10);
    expect(data.randomNumber).toHaveBeenCalledTimes(2)
  })
})
