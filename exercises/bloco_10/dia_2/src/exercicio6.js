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

// getAnimal("Soneca")
module.exports = {
  getAnimal,
}