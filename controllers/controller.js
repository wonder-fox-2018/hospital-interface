const Employee = require('../models/model').Employee

const View = require('../views/view')

class Controller {
    static readData(){
        Employee.readData(function(data1){
            View.getview(data1)
        }) 
    }
    static register(username, password, position){
        Employee.register(username,password, position,function(newUser){
            View.getview(newUser)
        });
    }
    static login(user, password){
        Employee.readData(function(data1){
            let found=false
            for(let i = 0; i< data1.length; i++){
                if(user === data1[i].username && password === data1[i].password){
                    found=true;
                    Employee.login(user,password,function(massage){
                        View.getview(massage)
                    })
                }
            }
            if(found===false){
                View.getview('username/password wrong!')
            }
        }) 
    }
}












module.exports = Controller