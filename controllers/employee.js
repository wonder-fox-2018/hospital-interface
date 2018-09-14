const EmployeeModel = require("../models/employee.js")
const InstanceEmployeeModel = new EmployeeModel
const EmployeeView = require("../views/employee.js")
const InstanceEmployeeView = new EmployeeView

class Employee {
    akses(username, password) {
        EmployeeModel.getAllAkses(username, password, function(data) {
            EmployeeView.displayLogin(data)
        })
    }

    aksesAdd() {
        
    }
}

module.exports = Employee