/* Parte 2 - Conteúdo */
let name = "Anderson Silva";
let birthCity = "Manaus/AM";
let birthYear = 1994;

/* console.log(name, birthCity, birthYear); */

birthYear = 2020;

/* console.log(birthYear); */

birthCity = "Curitiba/PA";

/* console.log(birthCity); */

/* Parte 3 - Conteúdo */
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

/* console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge); */

patientId = "50"
/* console.log(typeof patientId); */

let base = 5;
let altura = 8;

let area = base * altura;

/* console.log(area); */

let perimetro = (2 * base) + (2 * altura);

/* console.log(perimetro); */

/* Parte 4 - Conteúdo */
let notaCandidato = 99.17;

if(notaCandidato >= 80){
  console.log("Parabéns, você foi aprovado!")
}else if(notaCandidato < 80 && notaCandidato >= 60){
  console.log("Você está na nossa lista de espera")
}else{
  console.log("Você foi reprovado")
}