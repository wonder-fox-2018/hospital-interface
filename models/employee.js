const fs = require('fs')
const databaseEmployee = './database/employee.json'

class Employee {
    constructor(id,username, password, position) {
      this.id = id
      this.name = null
      this.position = position
      this.username = username
      this.password = password
      this.isLogin = false
    }

    //read
    static read(callback){ 
      fs.readFile(databaseEmployee,'utf8',(err,data)=>{
        if(!err) callback(null,JSON.parse(data))
        else callback(err,null)
      })
    }

    //write
    static write(newdata,callback){
      fs.writeFile(databaseEmployee,JSON.stringify(newdata,null,2),'utf-8',(err)=>{
        err ? callback(err,null) : callback(null,true) 
      })
    }

    //create
    static create(newEmployeeObj,callback){
      this.read((err,data)=>{
        if(!err){
          data.push(newEmployeeObj)
          this.write(data,(err,saved)=>{
            if(err) callback(err,null)
            else callback(null, newEmployeeObj)
          })
        } 
        else 
          callback(err,null)
      })
    }

    

}


module.exports = Employee