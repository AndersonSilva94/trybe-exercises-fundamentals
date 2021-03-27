/* Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills . */

const substituiString = (string, parametro) => {
  const findCaracter = string.replace("x", parametro);
  return findCaracter
}

console.log(substituiString("Tryber x aqui!", "Bebeto"));
console.log(substituiString("Trxber é aqui!", "Bebeto"));

/* Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe". */

const jsSkills = ["HTML", "CSS", "JavaScript", "React", "Git"];

const orderSkills = (array, paragraph) => {
  const order = array.sort();
    let text = `${paragraph} - Minhas cinco principais habilidades são: ` 
    
    order.forEach(elemento => {
      text = `${text}
      
  - ${elemento}`
    })

    text = `${text}
    
  #goTrybe!`;

    return text

}

console.log(orderSkills(jsSkills, substituiString("Tryber x aqui!", "Bebeto")));