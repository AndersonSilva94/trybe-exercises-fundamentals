function higherNumber (array) {
  let high = 0;
  let indice = 0;

  for (let index = 0; index < array.length; index += 1){
    if(array[index] > high){
      high = array[index];
      indice = index;
    }
  }
  return indice
}
console.log(higherNumber([2, 3, 6, 7, 10, 1]));
console.log(higherNumber([2, 4, 60, 7, 5, 0, -3]));