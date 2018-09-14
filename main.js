const Controller = require('./controllers/controller')
const input = process.argv.slice(2)

switch (input[0]) {
    case 'register' : Controller.addEmployee(input.slice(1)); break;
    case 'login' : Controller.login(input.slice(1)); break;
    case 'addPatient' : Controller.addPatient(input.slice(1)); break;
    case 'logout' : Controller.logout(); break;
    case 'help' : Controller.logout(); break;
    default : Controller.help(); break;
}