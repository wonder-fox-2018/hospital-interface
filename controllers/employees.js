var EmployeeModel = require('../models/employee.js');
var EmployeeView = require('../views/employeeView.js');

class EmployeeController {
    constructor() {

    }

    static register(username, password, job) {
        EmployeeModel.register(username, password, job, function(employee) {
            var totalEmployee = employee.length;
            var newEmployee = employee[employee.length - 1];
            EmployeeView.displayRegisterMessage(newEmployee, totalEmployee);
        });
    }

    static login(username, password) {
        EmployeeModel.login(username, password, function(loggedInUser) {
            EmployeeView.displayLoginMessage(loggedInUser);
        });
    }

    static addPatient(name, diagnosis) {
        EmployeeModel.addPatient(name, diagnosis, function(patientList) {
            if (typeof patientList === 'object') {
                var totalPatient = patientList.length;
                EmployeeView.displayAddPatientMessage(totalPatient);
            } else if (typeof patientList === 'string') {
                EmployeeView.displayAddPatientMessage(patientList);
            }
        });
    }

    static logout() {
        EmployeeModel.logout(function(response) {
            EmployeeView.displayLogoutMessage(response);
        });
    }
}

module.exports = EmployeeController;

