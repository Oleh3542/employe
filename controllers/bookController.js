const Book = require('../model/product');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Помилка при завантаженні книг' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Книга не знайдена' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Помилка при завантаженні книги' });
  }
};