const controllersEmployee = require('./controllers/employee')
const controllersPatient = require('./controllers/patient')

const input = process.argv.slice(2)
const command = input[0]
const commanFill = input.slice(1)

switch (command) {

    case 'register': controllersEmployee.register(commanFill); break;

    case 'login': controllersEmployee.login(commanFill); break;

    case 'addPatient': controllersPatient.addPatient(commanFill); break;

    case 'logout': controllersEmployee.logout(); break;

}