/* Questão 1 */
let a = 8;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

/* console.log(soma, subtracao, divisao, multiplicacao, modulo) */

/* Questão 2 */
let num1 = 8;
let num2 = 5;

if(num1 > num2){
  console.log(num1);
}else{
  console.log(num2);
}

/* Questão 3 */
let num3 = 8;
let num4 = 5;
let num5 = 29;

if (num3 > num4 && num3 > num5) {
  console.log(num3);
}else if(num4 > num3 && num4 > num5){
  console.log(num4);
}else{
  console.log(num5);
}

/* Questão 4 */
let positivoNegativo = 0;

if(positivoNegativo > 0 ){
  console.log("positivo");
}else if(positivoNegativo < 0 ){
  console.log("negativo");
}else{
  console.log("zero");
}

/* Questão 5 */
let lado1 = 40;
let lado2 = 30;
let lado3 = 110;
let somaNova = lado1 + lado2 + lado3;

if(somaNova === 180){
  console.log(true)
}else{
  console.log(false)
}

/* Questão 6 */
let peca = "Torre";

switch(peca.toLowerCase()){
  case 'rainha':
    console.log("Em todas as direções");
    break;
  case 'rei':
    console.log("Em todas as direções, mas uma casa por vez");
    break;
  case 'bispo':
    console.log("Apenas na diagonal da sua casa");
    break;
  case 'cavalo':
    console.log("Movimento em L");
    break;
  case 'torre':
    console.log("Movimento em horizontal e vertical");
    break;
  case 'peão':
    console.log("Movimento para frente, uma casa por vez");
    break;
  default:
    console.log("Não é uma peça!")
}

/* Questão 7 */
let porcentagem = 85;

if(porcentagem >= 0 && porcentagem <= 100){
  if(porcentagem >= 90){
    console.log("A")
  }else if(porcentagem >= 80){
    console.log("B")
  }else if(porcentagem >= 70){
    console.log("C")
  }else if(porcentagem >= 60){
    console.log("D")
  }else if(porcentagem >= 50){
    console.log("E")
  }else if(porcentagem < 50 && porcentagem >= 0){
    console.log("F")
  }
}else{
  console.log("Erro")
}