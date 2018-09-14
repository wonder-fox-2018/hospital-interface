const argv = process.argv.slice(2)
const command = argv[0]
const cmdAttributes = argv.slice(1)

const Controller = require('./controllers/controller')

switch (command) {
  case 'help':
    Controller.help()
    break;
  case 'register':
    Controller.register(cmdAttributes)
    break;
  case 'login':
    Controller.login(cmdAttributes)
    break;
  case 'add:patient':
    Controller.addPatient(cmdAttributes)
    break;
  case 'logout':
    Controller.logout()
    break;
  default:
    Controller.help()
    break;
}