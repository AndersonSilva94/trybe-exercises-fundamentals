/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

const verifyAnswers = (gabarito, respostas, action) => {
  return action(gabarito, respostas);
}

const totalScore = (array1, array2) => {
  let total = 0;
  for (let index in array1) {
    for (let elements in array2) {
      if (index === elements) {
        if (array1[index] === array2[elements]) {
          total += 1
        } else if (array2[elements] === 'N.A') {
          total += 0
        } else if (array1[index] !== array2[elements]) {
          total -= 0.5
        }
      }
    }
  }
  return total
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(verifyAnswers(rightAnswers, studentAnswers, totalScore))