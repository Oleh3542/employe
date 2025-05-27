const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/customers");

const router = express.Router();
const SECRET = "secret_key"; // заміни на безпечний ключ у продакшені

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed });
    await user.save();
    res.status(201).json({ message: "Користувача створено" });
  } catch (err) {
    res.status(400).json({ message: "Користувач вже існує або помилка" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Невірний email або пароль" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Невірний email або пароль" });

    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch {
    res.status(500).json({ message: "Помилка сервера" });
  }
});

module.exports = router;
