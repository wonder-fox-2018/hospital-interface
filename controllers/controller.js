const EmployeeModel = require('../models/EmployeeModel.js');
const PatientModel = require('../models/PatientModel.js');
const View = require('../views/view.js');

class Controller {
    static registerEmployee(username, password, role) {

        EmployeeModel.register(username, password, role, function(employees) {
            let newEmployee = JSON.stringify(employees[employees.length - 1]);
            let totalEmployees = employees.length;
            let output = `save data success ${newEmployee}. Total employee: ${totalEmployees}`;
            View.print(output);
        });
        
    }

    static login(myUsername, myPassword) {
        EmployeeModel.login(myUsername, myPassword, function(validLogin) {
            let loginAlert = validLogin ? `user ${myUsername} logged in sucessfully` : `username / password wrong`;
            View.print(loginAlert);
        })
    }

    static addPatient(name, diagnosis) {
        PatientModel.addPatient(name, diagnosis, function(validLogin) {

            if (!validLogin) {
                View.print('tidak memiliki akses untuk add patients!');
            }
        });
    }
}

//Controller.registerEmployee('budi', '123456', 'dokter');

//Controller.login('iam', 'in');

//Controller.login('tono', '123456');

//Controller.registerEmployee('tono', '123456', 'satpam');

//Controller.addPatient('daniel', 'pilek');

module.exports = Controller;