const Employee = require('../models/employeeModel')
const Patient = require('../models/patientModel')
const View = require('../views/view')
// const employeeData = require('../employee.json')
let fs = require('fs')




class ControllerPatient {
    constructor() {

    }

    // static register(username, password, role, callback) {
    //     let newEmployee = new Employee (username, password, role)
    //     let jsonEmploye = JSON.stringify(newEmployee)
    //     fs.writeFile('../employee.json', jsonEmploye, (err) =>{
    //         callback(typeof newEmployee)
    //         // Employee.showList()
    //     })
    // }

    // static showList() {
    //     fs.readFile('../employee.json', 'utf8', (err, dataJson) => {
    //         let result = JSON.parse(dataJson);
    //         View.showList(result)
    //     });
    // }
}


// ControllerPatient.showList()

// module.exports = ControllerPatient