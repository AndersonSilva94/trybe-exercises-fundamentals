const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

/* 1 - Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5. */
const countStudents = object => {
  const keysObject = Object.keys(object);
  let count = 0;
  for (let index in keysObject) {
    if (object[keysObject[index]].materia === "Matemática") {
      count += object[keysObject[index]].numeroEstudantes
    }
  }
  return count
}
console.log(countStudents(allLessons))

// teste teste teste