const mongoose = require('mongoose');

const uri = 'mongodb+srv://employe:1234567890@cluster0.onwa5hy.mongodb.net/employeDB?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
