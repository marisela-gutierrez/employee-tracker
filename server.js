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

// view all employees
function viewAllEmployees() {
  const sql = `SELECT employee.*, role.title, role.salary, department.name FROM employee
                LEFT JOIN role
                ON role.id = employee.role_id
                LEFT JOIN department
                ON role.department_id = department.id`;
 
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(cTable.getTable(rows));
    initialQuestions();
  });
}
 
// Create an employee
function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter employee first name",
        validate: (firstName) => {
          if (firstName) {
            return true;
          } else {
            console.log("Please enter employee first name");
          }
        },
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter employee last name",
        validate: (lastName) => {
          if (lastName) {
            return true;
          } else {
            console.log("Please enter employee last name");
          }
        },
      },
      {
        type: "input",
        name: "role",
        message: "Enter employee role ",
        validate: (role) => {
          if (role) {
            return true;
          } else {
            console.log("Please enter employee role");
          }
        },
      },
      {
        type: "input",
        name: "manager",
        message: "Enter employee manager",
        validate: (manager) => {
          if (manager) {
            return true;
          } else {
            console.log("Please enter employee manager");
          }
        },
      },
    ])
    .then((newEmployee) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
      params = [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id];
 
      db.query(sql, params, (err, rows) => {
        if (err) throw err;
        console.log("new employee added");
        initialQuestions();
      });
    });
}
 
