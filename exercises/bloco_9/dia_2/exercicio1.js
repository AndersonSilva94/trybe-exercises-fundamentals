// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (text) => {
  const areaJoke = document.getElementById('jokeContainer')
  areaJoke.innerText = text.joke;
}

const fetchJoke = (callback) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => callback(data));
};

window.onload = () => fetchJoke(appendJoke);