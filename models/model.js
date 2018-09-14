const fs= require("fs");


class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
}

class Employee {
  constructor(name, position, username, password,role) {
    this.name = name
    this.position = position
    this.username = username
    this.password = password
    this.role= role;
  }
  static register(params,callback){
      fs.readFile('./employee.json','utf8',(err,dataEmployeeStr)=>{
        let dataEmployee=JSON.parse(dataEmployeeStr);
        dataEmployee.push(new Employee(params[0],"",params[0],params[1],params[2]));
        fs.writeFile('./employee.json',JSON.stringify(dataEmployee, null, 2),'utf8', (err) => {
          if (err) throw err;
          callback(dataEmployee);
        });
        

      });
  }
  static login(params,callback){
    fs.readFile('./employee.json','utf8',(err,dataEmployeeStr)=>{
      let dataEmployee=JSON.parse(dataEmployeeStr);
      for (var i = 0; i < dataEmployee.length; i++) {
        if(dataEmployee[i].username==params[0] && dataEmployee[i].password==params[1]){
          fs.writeFile('./login.json',`{"username":"${params[0]}","role":"${dataEmployee[i].role}"}`,'utf8', (err) => {
            if (err) throw err;
            callback(true);
          });
          break;
        }
      }
      if(i== dataEmployee.length){
        params=false;
        fs.writeFile('./login.json',`{"username":"","role":""}`,'utf8', (err) => {
          if (err) throw err;
            callback(false);
        });
      }
    });
  }
  static addPatient(params,callback){
    fs.readFile('./login.json','utf8',(err,dataLoginStr)=>{
      let loginObj=JSON.parse(dataLoginStr);
      if(loginObj.username!="" && loginObj.role=="dokter"){
        //baca data patient
        fs.readFile('./patient.json','utf8',(err,dataPatienStr)=>{
          let patientObj=JSON.parse(dataPatienStr);
          let totalPatient=patientObj.length+1
          patientObj.push(new Patient(totalPatient,params[0],params[1]));
          fs.writeFile('./patient.json',JSON.stringify(patientObj, null, 2),'utf8', (err) => {
            if (err) throw err;
            callback(totalPatient);
          });

        });     
      }
      else{
        callback(-1);
      }  
      
    });
  } 
  static logout(callback){
    fs.writeFile('./login.json',`{"username":"","role":""}`,'utf8', (err) => {
      if (err) throw err;
        callback();
    });
  }
}

module.exports= {Employee,Patient};