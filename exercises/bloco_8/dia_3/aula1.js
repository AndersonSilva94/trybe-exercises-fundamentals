// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven); // a diferença entre find e filter é que o find retorna apenas o primeiro valor e o filter retorna um array com todos os valores que satisfaçam uma condição

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]

// const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 19 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter((people) => (people.age < 18))
// ); //retorna as pessoas que ainda não tem idade para dirigir

// console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
   listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
const newListStudents2 = removeStudentByName('Wilson', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
console.log(newListStudents2)