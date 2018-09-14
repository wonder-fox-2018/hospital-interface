const Employee = require('../models/employeeModel')
const Patient = require('../models/patientModel')
const View = require('../views/view')
// const employeeData = require('../employee.json')
let fs = require('fs')




class ControllerEmployee {
    constructor() {

    }

    static register(username, password, role) {
        Employee.register(username,password,role,(obj, total) =>{
            let output = `save data success ${JSON.stringify(obj)}. Total employee : ${total} `
            View.showList(output)
        })
        
    }

    static login(username, password) {
       Employee.readFile(function(result){
           let found=false
           for ( var i = 0; i < result.length; i++) {
               if ( result[i].username === username && result[i].password === password) {
                   found=true;
                   Employee.login(username, password,function(endResult){
                       View.showList(endResult)
                   })
               }
           }
           if (found===false){
               View.login()
           }
       })
    }
    static showList() {
        fs.readFile('../employee.json', 'utf8', (err, dataJson) => {
            let result = JSON.parse(dataJson);
            // console.log(result)
            View.showList(JSON.stringify(result))
        });
    }
}


ControllerEmployee.register('sapi','sapisuper','dokter')
// ControllerEmployee.register('kuda', 'kudaterbang', 'dokter')
// ControllerEmployee.register('kecoa', 'kecoarayap', 'ob')
// ControllerEmployee.register('laler', 'lalatx', 'admin')

module.exports = ControllerEmployee

