const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.commerce.productName(),
});

const generateManyBook = (size = 10) => {
  const fakeBooks = [];
  for (let index = 0; index < size; index += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBook };
