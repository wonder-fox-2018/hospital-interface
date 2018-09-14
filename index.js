const ControllerEmployee = require('./controllers/employeeController')
const ControllerPatient = require('./controllers/patientController')
const command = process.argv.slice(2)
// command = show, login, add, register
const login = command[0]
const username = command[1]
const password = command[2]

if ( login === 'login' ) {
    ControllerEmployee.login(username, password)
}