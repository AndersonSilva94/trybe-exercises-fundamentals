/* 1 - Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

const factorialNumber = number => {
  let factorial = 1;
  if (number < 0) {
    return "Digite um número positivo"
  } else {
    for (let index = number; index >= 1; index -= 1) {
      factorial *= index;
    }
    return factorial
  }
};

console.log(factorialNumber(3));