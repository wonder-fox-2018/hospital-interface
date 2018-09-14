const ModelEmployee = require('../models/employeeModel')
const View = require('../views')

class Controller {
    static help(){
        View.displayHelp()
    }
    static notFound(){
        View.notFound()
    }
    static register(username, password, position){
        ModelEmployee.register(username, password, position, (err,data) => {
            View.display(data)
        })
    }
    static login(username, password){
        ModelEmployee.login(username, password, 'login', (err, data) => {
            View.display(data)
        })
    }
    static logout(username){
        let password = 0
        ModelEmployee.login(username, password, 'logout', (err, data) => {
            View.display(data)
        })
    }
    static update(id, username, password, position){
        ModelEmployee.update(id, username, password, position, (err,data)=> {
          View.display(data)
        })
    }

}

module.exports = Controller