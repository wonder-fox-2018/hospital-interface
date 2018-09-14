const EmployeeModel = require('../models/EmployeeModel')
const View = require('../views/View')
class EmployeeController {
    constructor(){        
        this.lastEmployeeId = 0
    }

    static getEmployee(){
        EmployeeModel.getEmployee((err, data) => {
            View.displayEmployee(data)
            //this.lastEmployeeId = data[data.length-1]
        })
    }

    static register(name, position, username, password){
        EmployeeModel.employeeRegister(name, position, username, password, (err, data) => {
            View.displayRegister(JSON.stringify(data[data.length-1]), data.length)
        })      
    }

    static login(user, pass){
        //console.log(user, pass)
        EmployeeModel.getEmployee((err, data) => {
            let usr = '';
            for (let i = 0; i < data.length; i++) {
                if (data[i].username == user && data[i].password == pass){
                    usr = data[i]
                }
            }
            EmployeeModel.witeSession(usr, (err) => {
                if (err) throw err
            })
            View.displayLogin(usr.username)
        })
    }

}
module.exports = EmployeeController


