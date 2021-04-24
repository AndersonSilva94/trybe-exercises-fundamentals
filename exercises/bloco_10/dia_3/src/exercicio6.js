const fetch = require('node-fetch');
const urlDog = 'https://dog.ceo/api/breeds/list/all'

const fetchDogList = async () => {
  const url = await fetch(urlDog)
    .then(res => res.json())
    .then(data => data)
  return url
}

module.exports = { fetchDogList };