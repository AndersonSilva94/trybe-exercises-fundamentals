/* Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
A validação da resposta não deve ser case sensitive.
Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste')) */

const gabarito = (gabarito) => {
  return (resposta) => {
    const answer = resposta.toLowerCase();
    const returnInfo = gabarito === answer ? true : false;
    return returnInfo
  }
};

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

// const newTest = gabarito(correctAnswer);
// const userAnswerTest = newTest(userAnswer);
const userAnswerTest = gabarito(correctAnswer)(userAnswer);
console.log(userAnswerTest);