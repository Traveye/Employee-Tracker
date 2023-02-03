const inquirer = require("inquirer");
const chalk = require("chalk");
const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employee_db",
  password: "Password@123",
});
con
  .promise()
  .query("SELECT 1")
  .then(([rows, fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then(() => con.end());


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
        "View All Departements",
        "Add Department",
      ],
    },
  ]);
  console.log(userInput);
}
init();