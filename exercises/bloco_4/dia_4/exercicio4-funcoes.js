/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */
function largestName(array) {
  let largest = 0;
  let name = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > largest) {
      largest = array[index].length;
      name = array[index];
    }
  }
  return name;
}

console.log(largestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));