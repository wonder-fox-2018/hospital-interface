let fs = require("fs")

class Employee {
  constructor(username, password, role) {
    this.username = username
    this.password = password
    this.role = role
  }
    
  static create( username, password, role, callback){
    fs.readFile('./employee.json','utf-8',function(err,data){
    if (err) {
        callback(err,data)
    }
    let result = JSON.parse(data)
    result.push(new Employee(username,password,role))
    fs.writeFile('./employee.json',JSON.stringify(result, null, 2),'utf-8',(err) =>{
      callback(err,result)
      })
    })
  } 
  
  static login(username,password,callback){
    fs.readFile('./employee.json','utf-8',function(err,data){
      callback(err,data)
    })
  }
}


    
    
    


module.exports = Employee
