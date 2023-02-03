const express = require('express');
const app = express();
const inquirer = require("inquirer");
const chalk = require("chalk");
const apiRouter = require('./routes/index');


app.use('/api', apiRouter);


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

  
  switch(userInput.userChoice) {
    case "View All Employees": 
      console.log('viewing emps');
      init();
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