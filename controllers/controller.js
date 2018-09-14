const Employe=require('../models/model.js')
const View=require('../views/view.js')
class Controller{
    static readData(){
        Employe.readData(function(employies){
            View.showData(employies)
        })
    }
    static registrasi(username,password,tipe,harKerja,noIjin){
        Employe.registrasi(username,password,tipe,harKerja,noIjin,function(newUser){
            View.showData(newUser)
        })
    }
    static login(username,password){
        Employe.readData(function(employies){
            let ketemu=false
            for(let i=0;i<employies.length;i++){
                if(username===employies[i].username){
                    ketemu=true
                    if(password===employies[i].password){
                        Employe.login(employies[i],function(userLogin){
                            View.showData(userLogin)
                        })
                    }
                    else{
                        View.showData('PassWord Tidak Cocok!')
                    }
                }  
            }
            if(ketemu===false){
                View.showData('User Tidak Ditemukan!')
            }
        })
    }
    static addPatient(id,nama,keluhan){
        Employe.addPatient(id,nama,keluhan,function(hasil){
            View.showData(hasil)
        })
    }
    static logout(){
        Employe.logout(function(hasil){
            View.showData(hasil)
        });

    }
}
module.exports=Controller