let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Questão 7
let numeroMenor = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < numeroMenor){
    numeroMenor = numbers[index]
  }
}

console.log(numeroMenor)