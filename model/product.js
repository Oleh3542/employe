const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    _id: String,
  title: String,
  author: String,
  isbn: String,
  price: Number,
  catecory: String,
  imageUrl: String,
});

module.exports = mongoose.model('Book', bookSchema);
