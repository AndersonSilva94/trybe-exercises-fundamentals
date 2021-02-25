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

/* Questão 8 */
let num6 = 7;
let num7 = 3;
let num8 = 5;

if(num6 % 2 === 0 || num7 % 2 === 0 || num8 % 2 === 0){
  console.log(true)
}else{
  console.log(false)
}

/* Questão 9 */
let num9 = 2;
let num10 = 8;
let num11 = 4;

if(num9 % 2 !== 0 || num10 % 2 !== 0 || num11 % 2 !== 0){
  console.log(true)
}else{
  console.log(false)
}

/* Questão 10 */
let custoProduto = 5;
let valorVenda = 8;
let valorCustoTotal;
let lucro;

if(custoProduto < 0 || valorVenda < 0){
  console.log("Pane no sistema! Erro!");
}else{
  valorCustoTotal = custoProduto + (0.2 * custoProduto);
  lucro = valorVenda - valorCustoTotal
  console.log(lucro * 1000);
}

/* Questão 11 */
let inss;
let ir;
let salarioBruto = 3000;
let salarioBase

if(salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
}else{
  inss = salarioBruto - 570.88
}

salarioBase = salarioBruto - inss

if(salarioBase <= 1903.98){
  ir = salarioBase;
}else if(salarioBase <= 2826.65){
  ir = (salarioBase * 0.075) - 142.80; 
}else if(salarioBase <= 3751.05){
  ir = (salarioBase * 0.15) - 354.80;
}else if(salarioBase <= 4664.68){
  ir = (salarioBase * 0.225) - 636.13;
}else{
  ir = (salarioBase * 0.275) - 869.36
}

salarioBase = salarioBase -ir

console.log(salarioBase)