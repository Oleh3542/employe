const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  _id: String,
  first_name: String,
  last_name: String,
  position: String,
  department: String,
  phone: String,
  email: String,
  hire_date: Date,
  salary: Number
});

module.exports = mongoose.model('Employee', employeeSchema);