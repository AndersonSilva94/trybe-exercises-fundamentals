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

/* 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
const shiftMorining = (object, key, value) => {
  object[key] = value
  return object
}
console.log(shiftMorining(lesson2, "turno", "manhã"))

/* 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
const listKeys = object => {
  const objectKeys = Object.keys(object);
  return `${objectKeys}`
}
console.log(listKeys(lesson1));

/* 3 - Crie uma função para mostrar o tamanho de um objeto. */
const objectLength = object => {
  const lengthObj = Object.keys(object).length;
  return `A quantidade de propriedades do objeto é ${lengthObj}`
}
console.log(objectLength(lesson3));

/* 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const valueObj = object => {
  const val = Object.values(object);
  return val
}
console.log(valueObj(lesson1));

/* 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3. */
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons)

/* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */
const totalStudents = object => {
  const valuesObj = Object.keys(object);
  let total = 0;
  for (let index in valuesObj) {
    total += object[valuesObj[index]].numeroEstudantes
  }
  return total
}
console.log(totalStudents(allLessons));

/* 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. */
const getValueByNumber = (object, position) => {
  const valuesObj = Object.values(object)[position];
  return valuesObj;
}
console.log(getValueByNumber(lesson2, 0));

/* 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */
const checkKeyValue = (object, key, value) => {
  const entriesObj = Object.entries(object)
  let exist = false;
  for (let index in entriesObj) {
    if (entriesObj[index][0] === key && entriesObj[index][1] === value) {
      exist = true
    }
  }
  return exist
}
console.log(checkKeyValue(lesson1, "professor", "Maria Clara"))