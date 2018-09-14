let command = process.argv[2];
const Controller = require('./controller.js');


if (command === 'register') {
    let username = process.argv[3];
    let password = process.argv[4];
    let position = process.argv[5];
    Controller.register(username, password, position);
}
else if (command === 'read') {
    Controller.read() // buat testing aja
}
else if (command === "login") {
    let username = process.argv[3];
    let password = process.argv[4];
    Controller.login(username, password);
}
else if (command === "addPatient") {
    let id = process.argv[3];
    let patientName = process.argv[4];
    let sickness = process.argv;
    let diagnose = sickness.slice(5, sickness.length).join(' ');
    Controller.addPatient(id, patientName, diagnose);
}

