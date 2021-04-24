const data = require('../src/exercicio4');
const { test, expect } = require('@jest/globals');
// const { string } = require('yargs');
// const { describe } = require('yargs');

jest.mock('../src/exercicio4');

describe('test functions strings', () => {
  test('test func uppercase', () => {
    data.uppercase.mockImplementation(str => str.toLowerCase());

    data.uppercase('XABLAU');
    expect(data.uppercase).toHaveBeenCalled();
    expect(data.uppercase('XABLAU')).toMatch('xablau')
  })

  test('test func capitalize', () => {
    data.capitalize.mockImplementation(str => str[str.length - 1])

    data.capitalize('Manaus');
    expect(data.capitalize).toHaveBeenCalled();
    expect(data.capitalize('Manaus')).toMatch('s')
  })

  test('test func concatStrings', () => {
    data.concatStrings.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

    data.concatStrings('a', 'do', 'ro');
    expect(data.concatStrings).toHaveBeenCalled();
    expect(data.concatStrings('a', 'do', 'ro')).toMatch('adoro');
  })
})