// Array.some()
/* const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => { 
  names.some((name) => { 
    name[0] === letter; 
  })
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false */

// Array.every()
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => {
  return Object.values(studentGrades).every((grade) => { 
    return grade === 'Aprovado'
  })
}
;

console.log(verifyGrades(grades));