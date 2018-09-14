const employes = require('./model.js')
const view = require('./view.js')


class Controller {

    static showEmploye(){
        employes.showEmployes(function(callback){
            view.display(callback)
          })
    }

    static addEmploye(name,position,username,password){
        employes.addEmploye(name,position,username,password, (newEmploye,totalEmployes) => {
            view.display(`save data success ${newEmploye}. Total employes : ${totalEmployes}`)
        });
    }

    static login(username,password){
        employes.login(username,password,(callback) => {
            view.display(callback)
        })
    }

    
}

module.exports = Controller;
