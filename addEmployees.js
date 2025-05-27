// addEmployees.js
const mongoose = require('mongoose');
const Employee = require('./model/employee');

mongoose.connect('mongodb+srv://employe:1234567890@cluster0.onwa5hy.mongodb.net/employeDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const employees = [
    {
      _id: "1",
      first_name: "Василь",
      last_name: "Браздецький",
      position: "касир",
      department: "Відділ продажу",
      phone: "+380671234567",
      email: "vasilenko@company.com",
      hire_date: new Date("2022-03-15"),
      salary: 23000
    },
    {
      _id: "2",
      first_name: "Олександра",
      last_name: "Музика",
      position: "Бухгалтер",
      department: "Фінансовий відділ",
      phone: "+380673456789",
      email: "ivanova@company.com",
      hire_date: new Date("2021-11-10"),
      salary: 27000
    }
  ];

  await Employee.insertMany(employees);
  console.log("Працівників додано!");
  mongoose.connection.close();
});
