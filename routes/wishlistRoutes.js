const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find().sort({ addedAt: -1 });
    res.json(books);
});

router.post('/', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
});

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

module.exports = router;
