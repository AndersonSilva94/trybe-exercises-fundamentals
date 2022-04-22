const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const students = student => {
  const studentObj = Object.keys(student);
  for (let key in studentObj) {
    console.log(`${studentObj[key]}, Nível: ${student[studentObj[key]]}`)
  }
}
console.log('Estudante 1: ')
students(student1)
console.log(`
Estudante 2: `)
students(student2)