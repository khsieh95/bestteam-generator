const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function addMoreEmployees() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like the add another employee?",
        choices: ["Yes", "No"],
        name: "addEmployee",
      },
    ])
    .then(function ({ addEmployee }) {
      if (addEmployee === "Yes") {
        questionOne();
      } else {
        render(employees);
        fs.writeFile(outputPath, render(employees), (err) => {
          if (err) throw err;
          console.log("you created a new file!");
        });
      }
    });
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function questionOne() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])
    .then(function ({ role }) {
      console.log(role);
      if (role === "Manager") {
        manager();
      } else if (role === "Engineer") {
        engineer();
      } else {
        intern();
      }
    });
}

function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "number",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "number",
        message: "What is your office number?",
        name: "office",
      },
    ])
    .then(function (answers) {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      employees.push(manager);
      addMoreEmployees();
    });
}

function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "number",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github",
      },
    ])
    .then(function (answers) {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      addMoreEmployees();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "number",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school do you currently attend?",
        name: "school",
      },
    ])
    .then(function (answers) {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      addMoreEmployees();
    });
}
questionOne();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
