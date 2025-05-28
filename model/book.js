const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
 //  author: String,
  //  genre: String,
    addedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);
