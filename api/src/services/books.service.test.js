const { generateManyBook } = require('../fakes/books.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn(); // spie

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll, // stub
  create: () => {},
})));

describe('Test for Books Service', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return list of Books', async () => {
      // Arrange
      const fakeBooks = generateManyBook(12);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });

    test('should return one Book', async () => {
      const fakeBooks = generateManyBook(1);
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});

      expect(books[0].name).toEqual(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
