const Book = require('../models/Book');

const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  res.json(book);
};

const addBook = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
};

module.exports = { getBooks, getBookById, addBook };
