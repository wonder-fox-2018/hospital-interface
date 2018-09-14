const Employee = require('../Models/employee.js')
const employee = new Employee()
const View = require('../Views/view.js')
const view = new View()
const Patient = require('../Models/patient.js')
const patient = new Patient

class Controller {

    addUser(userName, position, password){
        employee.addUser(userName, position, password, function(userData){
            view.addFile(userData)
        })
    }

    login(userName,password){
        employee.login(userName,password, function(userLogin,flagValidate){
            if (flagValidate===true){
                view.loginSuccess(userLogin)
            }
            else {
                view.loginFailed()
            }
        })
    }

    addPatient(num,name,diag){
        employee.cekLogin(function(isUserLogin,userPosition){
            if (isUserLogin===true){
                if (userPosition==='DOKTER'){
                    patient.addPatient(num,name,diag,function(totalPatient){
                        view.addPatient(totalPatient)
                    })
                }
                else {
                    view.notDoctorPosition()
                }
            }
            else {
                view.notLoggedIn()
            }
        })
    }

    checkOut(){
        employee.cekLogin(function(isUserLogin,userPosition){
            if (isUserLogin===true){
                employee.checkOut(function(result){
                    view.checkOut(result)
                })
            }
            else {
                view.notLoggedIn()
            }
        })
    }
}

module.exports = Controller