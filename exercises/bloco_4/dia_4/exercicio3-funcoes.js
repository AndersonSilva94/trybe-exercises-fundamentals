function lowestNumber(array) {
  let indiceMenor = 0;
  
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] < array[indiceMenor]){
      indiceMenor = index
    }
  }
  return indiceMenor;
}
console.log(lowestNumber([11, 2, 4, -6, 7, 10, -1, 3]));