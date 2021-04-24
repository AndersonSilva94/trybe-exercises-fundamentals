const fetch = require('node-fetch');

const numberRandom = () => Math.round(Math.random() * 100);

const lowercase = (str1) => str1.toLowerCase();

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const getAPI = async () => {
  const url = await fetch(' https://pokeapi.co/api/v2/pokemon/pikachu')
  const data = await url.json();
  console.log(data)
}

const showPictures = async () => {    
  const response = await fecth('https://dog.ceo/api/breeds/image/random')    
  const date = await response.json()    
  return date
}

module.exports = { 
  numberRandom,
  lowercase,
  somar, 
  subtrair, 
  multiplicar, 
  dividir,
  getAPI,
  showPictures  
};