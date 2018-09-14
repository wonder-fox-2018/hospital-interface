const EmployeeController = require('./controllers/EmployeeController.js');
const PatientController = require('./controllers/PatientController.js');


let command = process.argv.slice(2,3)[0];
let input = process.argv.slice(3);
/* console.log(input);
console.log(command); */

if (command === 'register') {
    EmployeeController.registerEmployee(input[0], input[1], input[2]);
} else if (command === 'login') {
    EmployeeController.login(input[0], input[1]);
} else if (command === 'addPatient') {
    PatientController.addPatient(input[0], input[1].join(' '));
} //todo add logout;




//test
//EmployeeController.registerEmployee('budi', '123456', 'dokter');
//EmployeeController.login('budi', '123456');

//PatientController.addPatient('bagus', 'diare berat');
//PatientController.addPatient('ani', 'pusing');