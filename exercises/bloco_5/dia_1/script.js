/* document.querySelector("body").style.backgroundColor = "silver";
document.getElementById("header-container").style.backgroundColor = "green";
document.getElementsByTagName("section")[0].style.backgroundColor =
  "LightSalmon";
document.getElementsByTagName("section")[1].style.backgroundColor = "yellow";
let novoValor = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < novoValor.length; index += 1) {
  novoValor[index].style.backgroundColor = "purple";
}

let novoValor1 = document.querySelectorAll(".no-emergency-tasks h3");

for (let index = 0; index < novoValor1.length; index += 1) {
  novoValor1[index].style.backgroundColor = "black";
}

document.getElementsByTagName("footer")[0].style.backgroundColor = "darkgreen"; */

/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/
function escreverParagrafo (texto, texto1, texto2) {
  let paragrafo = document.getElementsByTagName("p")
  paragrafo[0].innerHTML = texto;
  paragrafo[1].innerHTML = texto1;
  paragrafo[2].innerHTML = texto2;

}

escreverParagrafo("lindo", "rico", "feliz")

 /* Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console. */
        
