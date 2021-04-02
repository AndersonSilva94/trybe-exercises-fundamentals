/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
1 - Modifique a estrutura da função para que ela seja uma arrow function .
2 - Modifique as concatenações para template literals . */


const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  /* console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida. */
}

testingScope(false);

/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
1 - Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
2 - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderNumber = () => {
  let firstNumber = 0;
  for (let index = 1; index < oddsAndEvens.length; index += 1) {
    for(let indexI = 0; indexI < oddsAndEvens.length; indexI += 1) {
      if (oddsAndEvens[index] < oddsAndEvens[indexI]) {
        firstNumber = oddsAndEvens[index];
        oddsAndEvens[index] = oddsAndEvens[indexI];
        oddsAndEvens[indexI] = firstNumber;
      }
    }
  }

  oddsAndEvens = `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
  return oddsAndEvens
}
orderNumber();
console.log(oddsAndEvens);