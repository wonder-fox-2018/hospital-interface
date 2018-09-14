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

    static addPatient(name,diagnosed){
        employes.permission((permission) => {
            view.display(permission)
            if(permission == true){
                employes.addPatient(name,diagnosed,(callback) => {
                    view.display(`data pasien berhasil ditambahkan. Total data pasien ${callback}`)
                })
            }else{
                view.display(`tidak memiliki akses untuk add patient`)
            }
        })
    }

    static logout(){
        employes.logout((callback) => {
            view.display(callback)
        })
    }

    
}

module.exports = Controller;
