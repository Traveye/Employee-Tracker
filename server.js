//npm requirements
const express = require("express");
const inquirer = require("inquirer");
const chalk = require("chalk");
const cTable = require("console.table");

//initiallizing and rel. file imports
const db = require("./connection/db");


//init user menu
async function init() {
  const userInput = await inquirer.prompt([
    {
      type: "list",
      name: "userChoice",
      message: chalk.blue("What would you like to do?"),
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
      ],
    },
  ]);

  //determines next func.
  switch (userInput.userChoice) {
    case "View All Employees":
      console.log("viewing emps");
      allEmp();
      break;
    case "Add Employee":
      console.log("adding emp");
      addEmployee();
      break;
    case "Update Employee Role":
      console.log("updating role");
      updateEmpRole();
      break;
    case "View All Roles":
      console.log("viewing roles");
      allRole();
      break;
    case "Add Role":
      console.log("adding role");
      addRole();
      break;
    case "View All Departments":
      console.log("vad");
      allDept();
      break;
    case "Add Department":
      console.log("adding D");
      addDept();
      break;
    default:
      console.log("something went wrong");
      init();
      break;
  }
}

// db query functions below to run based on user input above.

//employee functions
function allEmp() {
  db.query("SELECT * FROM EMPLOYEE;", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

async function addEmployee() {
  let details = await inquirer.prompt([
    {
      name: "first_name",
      message: "What is their first name?",
    },
    {
      name: "last_name",
      message: "What is their last name?",
    },
    {
      name: "role_id",
      message: "What is their role id?",
    },
    {
      name: "manager_id",
      message:
        "What is their manager ID? If their is no mananger simply press enter.",
    },
  ]);
  console.log(details);
  const { first_name, last_name, role_id, manager_id } = details;
  db.query(
    `INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`,
    [first_name, last_name, role_id, manager_id],
    (err) => {
      if (err) throw err;
      console.log("This employee has been added!");
    }
  );
}

async function updateEmpRole() {
  //get role titles for choices in prompt
  let titles = await new Promise((resolve, reject) => {
    db.query("SELECT title FROM role", (err, res) => {
      if (err) reject(err);
      resolve(res.map((obj) => obj.title));
    });
  });

  let details = await inquirer.prompt([
    {
      name: "first_name",
      message: "What is the first name of the employee you want to update?",
    },
    {
      name: "last_name",
      message: "What is their last name?",
    },
    {
      type: "list",
      name: "role",
      message: "Choose their new role from the list below",
      choices: titles,
    },
  ]);
  console.log(details);
  const { first_name, last_name, role } = details;

  role_id = await new Promise((resolve, reject) => {
    db.query(`SET @role_id = (SELECT id FROM role WHERE title = ?);`, [role],(err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
  

  db.query(
     `UPDATE employee SET role_id = @role_id WHERE first_name = ? AND last_name = ?;`,
    [first_name, last_name],
    (err) => {
      if (err) throw err;
      console.log("employee updated");
    }
  );
}

//role functions
function allRole() {
  db.query("SELECT * FROM department Left JOIN role ON department.id = role.department_id;", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

async function addRole() {
  let details = await inquirer.prompt([
    {
      name: "title",
      message: "What is the role's title?",
    },
    {
      name: "salary",
      message: "What is the salary?",
    },
    {
      name: "department_id",
      message: "What is the department number?",
    },
  ]);
  console.log(details);
  const { title, salary, department_id } = details;
  db.query(
    `INSERT INTO ROLE (title, salary, department_id) VALUES (?, ?, ?);`,
    [title, salary, department_id],
    (err) => {
      if (err) throw err;
      console.log("This role has been added!");
    }
  );
}

//dept functions
function allDept() {
  db.query("SELECT * FROM DEPARTMENT;", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

async function addDept () {
  let details = await inquirer.prompt([
    {
      name: "dept",
      message: "What is the name of the new department?",
    },
  ]);
  console.log(details);
  const { dept } = details;
  db.query(
    `INSERT INTO department (name) VALUES (?);`,
    dept,
    (err) => {
      if (err) throw err;
      console.log("This dept has been added!");
    }
  );
}




init();
