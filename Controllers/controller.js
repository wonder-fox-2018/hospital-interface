const Employee = require('../Models/employee.js')
const employee = new Employee()
const View = require('../Views/view.js')
const view = new View()

class Controller {

    //buat objek baru, terima dari controller, lempar ke model
    addUser(userName, position, password){
        //disininya buat callback juga?
        employee.addUser(userName, position, password, function(userData){
            view.addFile(userData)
        })
    }

    //verifikasi user login
    login(userName,password){
        employee.login(userName,password, function(userLogin,flagValidate){
            //cek hasil flag
            if (flagValidate===true){
                view.loginSuccess(userLogin)
            }
            else {
                view.loginFailed()
            }
        })
    }
}

module.exports = Controller