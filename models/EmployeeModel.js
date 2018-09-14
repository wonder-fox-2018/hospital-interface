const fs = require('fs');

class EmployeeModel {
  constructor(id, name, position, username, password) {
    this.id = id;
    this.name = name  
    this.username = username
    this.password = password
    this.position = position
  }

  static readFile(callback) {
    fs.readFile('./employee.json','utf-8', (err, data) => {
      callback(err, data)
    })
  }

  

  static readSession(callback) {
    fs.readFile('./session.json','utf-8', (err, data) => {
      callback(err, data)
    })
  }

  static getLastId(cb){
    this.readFile((err, data) =>{
      let employees = JSON.parse(data) 
      let lastId = 0
      if (employees.length !== 0){
        lastId = employees[employees.length-1].id
      }      
      cb(err, lastId)
    })
  }

  static getEmployee(callback){
    this.readFile((err, data) => {
      let employees = JSON.parse(data)
      callback(err, employees)
    })     
  }

  static employeeRegister(name, position, username, password, callback){ // name, position, username, password
    this.readFile((err, data) => {
      this.getLastId((err, lastId) => {
        //console.log(data)
        let employees = JSON.parse(data)
        if (employees.length === 0) {
          lastId = 0
        }
        employees.push(new EmployeeModel(lastId+1, name, position, username, password, position))           
        //console.log(employees)
        fs.writeFile('employee.json', JSON.stringify(employees, null, 2), (err) => {
          callback(err, employees) 
        })
        
      })    
    })
  }

  static login(username, password, callback){
    this.readFile((err, data) => {
      let employees = JSON.parse(data);
      callback(employees)
    })
  }

  static witeSession(username, callback){
    if (username && username !== ''){
      fs.writeFile('session.json', JSON.stringify([username], null, 2), (err, data) => {
        if (err) throw err
      })
      callback()
    }else{
      fs.writeFile('session.json', JSON.stringify([], null, 2), (err, data) => {
        if (err) throw err
      })
      callback()
    }
    
  }

  static getSession(callback){
    this.readSession((err, data) => {
      let session = JSON.parse(data)
      callback(err, session)
    })     
  }

  


}


module.exports = EmployeeModel
//EmployeeModel.employeeRegister()
