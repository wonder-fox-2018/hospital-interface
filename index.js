const controller = require('./controllers/EmployeeController.js')
let command = process.argv;
//let commands = ['show', 'login', 'add', 'register']
// console.log(controller)

if (command[2] === 'show') controller.getEmployee()
if (command[2] === 'login') controller.login(command[3], command[4])
if (command[2] === 'register') controller.register(command[3], command[4], command[5], command[6])
 