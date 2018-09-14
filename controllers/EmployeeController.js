const EmployeeModel = require('../models/EmployeeModel')
const PatientModel = require('../models/PatientModel')
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

    static logout(){
        EmployeeModel.witeSession(null, (err, data) => {
            View.displayLogout()
        })
        
    }

    static addPatient(patient, disease){
       EmployeeModel.getSession((err, data) => {
           if (data.length === 0){
               console.log(data)
              View.displayAddPatient('Please Login First')
           }else{
               if (data[0].position != 'doktor'){
                View.displayAddPatient('tidak memiliki akses untuk add patient')
               }else{
                    PatientModel.insertPatient(patient, disease, (err, data) => {
                        console.log(data)
                    })
               }
               
           }
       })
    }

}
module.exports = EmployeeController


