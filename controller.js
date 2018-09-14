const ModelEmployee = require('./models/model-employee.js')
const ModelPatient = require('./models/model-patient.js')
const View = require('./view.js')

class Controller {
    static read () {
        ModelEmployee.read(function (jsonUser) {
            View.print(jsonUser);
        })
    }

    static register (username, password, position) {
        ModelEmployee.register(username, password, position, function(newUser, dataLength) {
            View.print(newUser, dataLength)
        })
    }

    static login (username, password) {
        ModelEmployee.login(username, password, function(isLoggedIn) {
            let login = '';
            if (!isLoggedIn) {
                login = 'username / password wrong'
            }
            else if (isLoggedIn) {
                login = `user ${username} logged in successfully`
            }
            View.print(login)
        })
    }


    static addPatient (id, patientName, diagnose) {
        ModelPatient.permission(function(isAuthorised) {
            if (isAuthorised) {
                ModelPatient.addPatient(id, patientName, diagnose, function(patientLength) {
                    View.print(`data pasian berhasil ditambahkan. Total data pasien: ${patientLength}`)
                })
            }
            else {
                View.print('anda tidak bisa tambah patient')
            }
            
            
        })
    }

}


module.exports = Controller;
