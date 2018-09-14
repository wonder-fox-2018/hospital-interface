const ControllerEmployee = require('./controllers/employeeController')
const ControllerPatient = require('./controllers/patientController')
const command = process.argv.slice(2)
// command = show, login, add, register
const username = command[1]
const password = command[2]
const role = command[3]

if ( command[0] === 'login' ) {
    ControllerEmployee.login(username, password)
}
// if ( command[0] === 'show' ) {
//     ControllerEmployee.showList()
// }
// if ( command[0] === 'add' ) {
//     ControllerPatient.add(username, password)
// }
// if ( command[0] === 'register' ) {
//     ControllerEmployee.register(username, password, role)
}