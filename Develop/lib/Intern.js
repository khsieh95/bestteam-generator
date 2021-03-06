// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Engineer");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.id = id;
    this.name = name;
    this.email = email;
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
