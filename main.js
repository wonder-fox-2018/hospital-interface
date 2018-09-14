const Controller = require('./controllers/controller')
const ControllerPatient = require('./controllers/patientController')

const argv = process.argv.slice(2)
const command  = argv[0]
const input1 = argv[1]
const input2 = argv[2]
const input3 = argv[3]
const input4 = argv[4]

switch (command) {
    case 'help':
        Controller.help()
        break;
    case 'register':
        Controller.register(input1, input2, input3)
        break;
    case 'login':
        Controller.login(input1, input2)
        break;
    case 'logout':
        Controller.logout(input1)
        break;
    case 'update':
        Controller.update(input1, input2, input3, input4)
        break;
    case 'addPatient':
        ControllerPatient.addPatient(input1, input2)
        break;
    default:
        Controller.notFound()
        break;
}