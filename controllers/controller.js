
const Model=require('../models/model');
const View=require('../views/view');
class Controller{

    static register(params){
        Model.Employee.register(params,function(employee){
            let lIndex= employee.length-1;
            View.print(`save data success{"username":${employee[lIndex].username},password:${employee[lIndex].password},role:${employee[lIndex].role}}.Total employee : ${lIndex}`);
        });

    }
    static login(params){
        Model.Employee.login(params,function(result){
            if(result==true){
                View.print(`user ${params[0]} logged in successfully`);
            }else
                View.print(`username / password wrong`);

        });

    }
    static addPatient(params){
        Model.Employee.addPatient(params,function(result){
            if(result>=1){
                View.print(`data patient berhasil ditambahkan. Total data pasien ${result}`);
            }else
                View.print(`tidak memiliki akses untuk add patient`);

        });

    }
    static logout(){
        Model.Employee.logout(function(){  
            View.print(`logout telah berhasil dilakukan`);

        });

    }
    static notFound(){
            View.print(`Sorry not found command`);
    }
}

module.exports= Controller;