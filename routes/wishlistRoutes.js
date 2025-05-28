const express = require('express');
const router = express.Router();
const Book = require('/model/Book'); // Модель книги

// Додати нову книгу
router.post('/books', async (req, res) => {
  const { title } = req.body;
  try {
    const book = new Book({ title });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Помилка сервера при додаванні книги' });
  }
});

// Отримати всі книги
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Помилка при отриманні книг' });
  }
});

module.exports = router;

