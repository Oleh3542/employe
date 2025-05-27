const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://employe:1234567890@cluster0.onwa5hy.mongodb.net/employeDB?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB підключено!');
  } catch (error) {
    console.error('Помилка підключення до MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
