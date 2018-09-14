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
  
  static addEmploye(name,position,username,password,callback){
    fs.readFile('employes.json','utf8',(err,dataString) => {
      let employes = JSON.parse(dataString);
      let newEmploye = new Employe(name,position,username,password)
      employes.push(newEmploye)
      let output = JSON.stringify(employes)
      fs.writeFile('employes.json',output,'utf8',(err)=>{
        if(err){
          
        }
        callback(JSON.stringify(newEmploye),employes.length)
      });
    }); 
  }
  
  
  
};


module.exports=Employe;


