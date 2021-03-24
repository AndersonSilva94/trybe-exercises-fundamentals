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

/* 2- Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = string => {
  const words = string.split(' ');
  let lengthWords = 0;
  let highWord = '';
  for (let index = 0; index < words.length; index += 1) {
    if (words[index].length > lengthWords) {
      lengthWords = words[index].length;
      highWord = words[index];
    }
  }
  return highWord
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))