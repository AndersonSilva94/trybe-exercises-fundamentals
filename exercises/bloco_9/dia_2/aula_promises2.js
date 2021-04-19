const fetch = require('node-fetch'); // buscando a biblioteca node-fetch do node js

async function verifiedFetch(url) { // uma url será passada no parâmetro
  return new Promise((resolve, reject) => { // cria um função construtora com a classe Promise
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') { // se a url for igual a esta
      return fetch(url) // faça uma requisição a url -> retorna uma promise
        .then((r) => r.json()) // depois converte essa promise em dados json
        .then((r) => resolve(r.value)); // pega a promise anterior e acessa o valor buscado no objeto Json
    }
      throw new Error('endpoint não existe'); // uma classe error caso dê algum erro no processamento da requisição
  });
}

// o async transforma qualquer função em uma promise
// basta colocar async antes da criação da função
// onde tem o primeiro resolve, coloca return
// onde entra o erro, coloca throw
// o await espera que toda a função termine sua execução de then() e/ou catch(), para depois imprimir o valor no console ou onde quer que seja impresso
// na função abaixo, o sendJokeFriend espera o verifiedFetch terminar a execução para depois seguir com seu fluxo

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");
sendJokeToFriend("Andy");