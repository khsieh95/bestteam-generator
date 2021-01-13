// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(office) {
    super(id, name, email);
    this.office = office;
    this.email = email;
  }
}

module.exports = Manager;
