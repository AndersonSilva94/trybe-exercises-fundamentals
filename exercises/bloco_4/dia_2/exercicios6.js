let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [2, 4, 6, 18, 70, 8, 100, 2, 10, 64];

//Questão 6
let qtdeNumerosImpar = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    qtdeNumerosImpar += 1
  }
}

if(qtdeNumerosImpar !== 0){
  console.log(`A quantidade de números ímpares no array é ${qtdeNumerosImpar}`)
}else{
  console.log('Nenhum valor ímpar encontrado')
}