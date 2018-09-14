const fs = require('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosed = diagnosis
  }
}

class Employe {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
  }
  
  static showEmployes(callback){
    fs.readFile('employes.json','utf8',(err,dataString) => {
      let employes = JSON.parse(dataString);
      callback(employes);
    });
  };
  
  static addEmploye(name,position,username,password,callback){
    fs.readFile('employes.json','utf8',(err,dataString) => {
      let employes = JSON.parse(dataString);
      let newEmploye = new Employe(name,position,username,password)
      employes.push(newEmploye)
      let output = JSON.stringify(employes,null,2)
      fs.writeFile('employes.json',output,'utf8',(err)=>{
        if(err){
          
        }
        callback(JSON.stringify(newEmploye),employes.length)
      });
    }); 
  }

  static login(username,password,callback){
    fs.readFile('employes.json','utf8',(err,dataString) => {
      let employes = JSON.parse(dataString);
      let permission = false
      for(let i = 0 ; i < employes.length ; i ++){
        if(employes[i].username === username && employes[i].password === password){
          let login = JSON.stringify(employes[i],null,2)
          permission = true
          fs.writeFile('login.json',login,'utf8',(err)=>{
            if(err){

            }
            callback(`${employes[i].username} berhasil login`)
          })
        }
      }
      if(permission == false){
        callback(`username / password salah`)
      }
    }
  )};

  static permission(callback){
    fs.readFile('login.json','utf8',(err,dataString) => {
      let login = JSON.parse(dataString);
      let permission = false

      for(let i = 0 ; i <= 1 ; i ++){ //looping abal abal
        if(login.position === 'Doctor'){
          permission = true
        }
      }
      callback(permission);
    });
  };

  static addPatient(name,diagnosed,callback){
    fs.readFile('patients.json','utf8',(err,dataString) => {
      let patients = JSON.parse(dataString);
      let id = patients[patients.length - 1].id + 1
      let patient = new Patient(id,name,diagnosed)
      patients.push(patient)
      let output = JSON.stringify(patients,null,2)
      fs.writeFile('patients.json',output,'utf8',(err)=>{
        if(err){
          
        }
        callback(patients.length)
      });
    }); 
  }

  static logout(callback){
    fs.readFile('login.json','utf8',(err,dataString) => {
      let login = JSON.parse(dataString);
      
      login.name = null
      login.position = null
      login.username = null
      login.password = null

      let output = JSON.stringify(login,null,2)

      fs.writeFile('login.json',output,'utf8',(err)=>{
        if(err){

        }
        callback(`you've been logged out successfully`)
      })
    });
  }


};


module.exports=Employe;


