const miniApp = require("express").Router();

const deptRouter = require('./api/dept');
const employeeRouter = require('./api/employee');
const roleRouter = require('./api/role')


miniApp.use('/department', deptRouter);
miniApp.use('/employee', employeeRouter);
miniApp.use('/role', roleRouter);

module.exports = miniApp;
