const db = require('./db/connection');
const inquirer = require("inquirer");
const cTable = require("console.table");

// view all departments
function viewAllDepartments() {
  const sql = "SELECT * from department";
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(cTable.getTable(rows));
  });
  initialQuestions();
}

// Create a department
function createDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter the name of department:",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter the department name");
          return false;
        }
      },
    })
    .then((newDepartment) => {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      const params = newDepartment.name;
      db.query(sql, params, (err, rows) => {
        if (err) throw err;
        console.log("New department successfully added");
        initialQuestions();
      });
    });
}

