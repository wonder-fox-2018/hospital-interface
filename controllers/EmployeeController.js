const EmployeeModel = require('../models/EmployeeModel.js');
const View = require('../views/view.js');

class EmployeeController {
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
}

module.exports = EmployeeController;