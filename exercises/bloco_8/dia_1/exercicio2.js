// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const loteryResult = (number, action) => {
  let newNumber = Math.ceil(Math.random() * 5)
  action(newNumber, number)
}

const checkEqual = (number1, number2) => {
  if (number1 !== number2) {
    console.log(number1, number2,"Tente novamente")
  } else {
    console.log(number1, number2,"Parabéns você ganhou")
  }
}

loteryResult(3, checkEqual)