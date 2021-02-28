let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Questão 1 - bônus
for (let indexI = 1; indexI < numbers.length; indexI++) {
  for (let indexJ = 0; indexJ < indexI; indexJ++) {
    if (numbers[indexI] < numbers[indexJ]) {
      let position = numbers[indexI];
      numbers[indexI] = numbers[indexJ];
      numbers[indexJ] = position;
    }
  }
}

console.log(numbers)