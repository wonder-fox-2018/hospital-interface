const employes = require('./model.js')
const view = require('./view.js')


class Controller {
    contructor(){

    }

    static showEmploye(){
        employes.showEmployes(function(callback){
            view.display(callback)
          })
    }

    
}

module.exports = Controller;
