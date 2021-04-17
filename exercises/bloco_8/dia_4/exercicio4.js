const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

// 4- Encontre o livro com maior nome

function longestNamedBook() {
  return books.reduce((acc, actual) => (acc.name.length > actual.name.length) ? acc : actual)
}

console.log(longestNamedBook())
assert.deepStrictEqual(longestNamedBook(), expectedResult);

/* 
  1a forma)
  function longestNamedBook() {
  let longest; //undefined é avaliado com false
  books.find((book) => {
    if (!longest || longest.length < book.name.length) {
      longest = book.name
    }
  })
  return longest
} */

/* 
  2a forma)
  function longestNamedBook() {
  return books.reduce((acc, actual) => {
    if (acc.name.length > actual.name.length) return acc;
    return actual;
  }).name
} */

/* 
  4a forma)
  function longestNamedBook() {
  return books.reduce(({ name: name1 }, actual) => 
    (name1.length > actual.name.length) ? {name: name1} : actual).name
} */