let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacaoNumbers = []; 

for(let indexI = 0; indexI < numbers.length; indexI += 1){
  if(indexI < numbers.length - 1){
    resultado = numbers[indexI] * numbers[indexI + 1]
    multiplicacaoNumbers.push(resultado)
  }
}console.log(multiplicacaoNumbers)