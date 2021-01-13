// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName() {
    const newEmployee = new Employee(name, email);
    return newEmployee;
  }
}

module.exports = Employee;
