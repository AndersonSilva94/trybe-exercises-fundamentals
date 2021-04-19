/* 2 - Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
* Primeiramente, instancie uma Promise
* Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
* Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
* Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções! */

const calcNumbersArray = () => {
  const newArray = [];
  for (let index = 1; index <= 10; index += 1) {
    newArray.push(Math.ceil(Math.random() * 50))
  }
  return newArray;
}

// console.log(calcNumbersArray())

const createArray = (array) => {
  return new Promise((resolve, reject) => {
    const calcArray = array.map((number) => Math.pow(number, 2))
      .reduce((acc, actual) => acc + actual);
    if (calcArray < 8000) {
      return resolve(calcArray)
    } reject(calcArray)
  })
  .then((msg) => console.log(`Promise resolvida! Nosso cálculo foi ${msg}`))
  .catch((error) => console.log(`Promise rejeitada! Nosso cálculo foi ${error}`))
}

createArray(calcNumbersArray());