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
        console.log("New department added!");
        initialQuestions();
      });
    });
}

// view all roles and related information
function viewAllRoles() {
  const sql = `SELECT role.id, role.title, role.salary,
                  department.name AS department
                  FROM role 
                  LEFT JOIN department
                  ON role.department_id = department.id`;
 
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(cTable.getTable(rows));
  });
  initialQuestions();
}
 
// Create a role
function createRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the job title ",
        validate: (title) => {
          if (title) {
            return true;
          } else {
            console.log("Please enter job title");
          }
        },
      },
      {
        type: "input",
        name: "salary",
        message: "Enter positions salary ",
        validate: (salary) => {
          if (salary) {
            return true;
          } else {
            console.log("Please enter position salary");
          }
        },
      },
      {
        type: "input",
        name: "department",
        message: "Enter the department of position ",
        validate: (department) => {
          if (department) {
            return true;
          } else {
            console.log("Please enter the department of position");
          }
        },
      },
    ])
    .then((newRole) => {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
      const params = [newRole.title, newRole.salary, newRole.department_id];
 
      db.query(sql, params, (err, rows) => {
        if (err) throw err;
        console.log("New role added!");
        initialQuestions();
      });
    });
}
