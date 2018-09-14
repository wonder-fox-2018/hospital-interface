const fs = require('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
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
  
  static addEmployes(name,position,username,password){
    
  }
  
  
  
};


module.exports=Employe;


