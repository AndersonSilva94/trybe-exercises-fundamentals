/* 5 - Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array. */

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
    } reject()
  })
  // .then((msg) => console.log(`Promise resolvida! Nosso cálculo foi ${msg}`))
  .then((arr) => func(arr))
  .then((sum) => console.log(sum.reduce((acc, actual) => acc + actual)))
  .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))
}

createArray(calcNumbersArray(), calcNewArray);