const fetch = require('node-fetch');
const data = require('../src/bonus');

jest.mock('node-fetch');

test('test api joke', () => {
  const badJoke = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(badJoke)
  }))

  return data.fetchJoke()
  .then(data => expect(data).toMatch('Whiteboards ... are remarkable.'))
})