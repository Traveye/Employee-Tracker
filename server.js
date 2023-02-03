//npm requirements
const express = require('express');
const inquirer = require("inquirer");
const chalk = require("chalk");
const cTable = require("console.table")

//initiallizing and rel. file imports
const app = express();
const db = require('./connection/db');

//init user menu
async function init() {
  const userInput = await inquirer.prompt([
    {
      type: "list",
      name: "userChoice",
      message:
        chalk.blue("What would you like to do?"),
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
  switch(userInput.userChoice) {
    case "View All Employees": 
      console.log('viewing emps');
      db.query("SELECT * FROM EMPLOYEE;", (err, res) => {
        if(err) throw err;
        console.table(res);
      })
      break;
    case "Add Employee":
      console.log('adding emp');
      init();
      break;
    case "Update Employee Role":
      console.log('updating role');
      init();
      break;
    case "View All Roles":
      console.log('viewing roles');
      init();
      break;
    case "Add Role":
      console.log('adding role');
      init();
      break;
    case "View All Departments":
      console.log('vad');
      init();
      break;
    case "Add Department":
      console.log("adding D");
      init();
      break;
    default:
      console.log('something went wrong');
      init();
      break;

  }
}
init();





// app.use('/api', apiRouter);
// const apiRouter = require('./routes/index');