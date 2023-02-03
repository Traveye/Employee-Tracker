const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password@123',
  database: 'employees_db'
});

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "employees_db",
//     password: "Password@123",
//   });
//   db
//     .promise()
//     .query("SELECT 1")
//     .then(([rows, fields]) => {
//       console.log(rows);
//     })
//     .catch(console.log)
//     .then(() => db.end());

    module.exports = db;