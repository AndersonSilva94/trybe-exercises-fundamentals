/* 3 - Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10. */

const calcNumbersArray = () => {
  const newArray = [];
  for (let index = 1; index <= 10; index += 1) {
    newArray.push(Math.ceil(Math.random() * 50))
  }
  return newArray;
}

const calcNewArray = (numbers) => {
  const array = [2, 3, 5, 10]
  let newArray = [];
  let number = numbers;
  array.forEach((numb) => {
    // number /= numb
    newArray.push(Math.round(number / numb))
  })
  return newArray;
}

// console.log(calcNewArray(100))

const createArray = (array, func) => {
  return new Promise((resolve, reject) => {
    const calcArray = array.map((number) => Math.pow(number, 2))
      .reduce((acc, actual) => acc + actual);
    if (calcArray < 8000) {
      resolve(calcArray)
    } reject(calcArray)
  })
  // .then((msg) => console.log(`Promise resolvida! Nosso cálculo foi ${msg}`))
  .then((arr) => console.log(func(arr)))
  .catch((error) => console.log(`Promise rejeitada! Nosso cálculo foi ${error}`))
}

createArray(calcNumbersArray(), calcNewArray);