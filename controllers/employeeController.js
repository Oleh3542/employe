const Employee = require('../model/employee');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
        console.log('Employees from DB:', employees);  
    res.json(employees);
  } catch (err) {
    console.error(err);
        console.error('Error fetching employees:', err);  
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllEmployees };

