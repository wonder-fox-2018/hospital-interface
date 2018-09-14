var EmployeeController = require('./controllers/employees.js');

var command = process.argv[2];

if (command === 'register') {
    var username = process.argv[3];
    var password = process.argv[4];
    var job = process.argv[5];

    EmployeeController.register(username, password, job);
} else if (command === 'login') {
    var username = process.argv[3];
    var password = process.argv[4];

    EmployeeController.login(username, password);
} else if (command === 'addPatient') {
    var name = process.argv[3];
    var diagnosis = process.argv.slice(4).join(' ');

    EmployeeController.addPatient(name, diagnosis);
} else if (command === 'logout') {
    EmployeeController.logout();
} else {
    var commandList = ['node index.js register <username> <password> <job>', 'node index.js login <username> <password>', 'node index.js addPatient <patientName> <patientSicknesses>', 'node index.js logout'];
    var realCommandList = commandList.join('\n');
    console.log('Unknown command. Please choose carefully from this command list below.');
    console.log('');
    console.log(realCommandList);
}