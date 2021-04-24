const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        resolve(arrayAnimals);
      };
        reject({ error: 'Nenhum animal com esse nome!' });
    }, 100);
  })
);

const getAnimal = async (name) => {
  const func = await findAnimalByName(name)
  try {
    return func
  } catch (error) {
    return error
  }
};

const findAnimalsByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        resolve(arrayAnimals);
      };
        reject('Nenhum animal com essa idade!');
    }, 100);
  })
}

const getAge = async (age) => {
  const func2 = await findAnimalsByAge(age)
  try {
    return func2
  } catch (error) {
    return error
  }
};

//getAge(5)
module.exports = {
  getAnimal,
  getAge
}