const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes'); // ⬅️ додано

const app = express();
const PORT = 3000;

// Підключення до MongoDB
mongoose.connect('mongodb+srv://employe:1234567890@cluster0.onwa5hy.mongodb.net/employeDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Парсинг JSON у запитах
app.use(express.json());

// Маршрути
app.use('/api', employeeRoutes);
app.use('/api', authRoutes); // ⬅️ додано для логіна і реєстрації

// Віддаємо index.html при заході на корінь сайту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Додано для обслуговування style.css
app.use(express.static(path.join(__dirname))); // ⬅️ додано

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
