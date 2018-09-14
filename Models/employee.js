//koneksi ke filesistem
const fs = require('fs')

class Employee {
    constructor(name, position, username, password) {
      this.name = name
      this.position = position
      this.username = username
      this.password = password
    }

    addUser(userName, position, password,callBack){
        
        //read file JSON
        fs.readFile('./JSON/employees.json','utf8',(err,employeeStr)=>{
            if (err){
                callBack(err)
            }
            else  {
                var employeeArr=JSON.parse(employeeStr)
                //buat objek Employeenya dulu, push ke array JSON
                var employee = new Employee(userName, position, userName, password)
                employeeArr.push(employee)
                var employeeToStr=JSON.stringify(employeeArr)
                //dari array, overwrite ke file json
                fs.writeFile('./JSON/employees.json',employeeToStr, (err)=>{
                    if (err){
                        callBack(err)
                    }
                    else {
                        callBack(employeeArr)
                    }
                })
            }
        })   
    }

    login(userName,password,callBack){
        //read file JSON, konversi ke array
        fs.readFile('./JSON/employees.json','utf8',(err,employeeStr)=>{
            if (err){
                callBack(err)
            }
            else {
                var employeeArr=JSON.parse(employeeStr)
                //looping isi arraynya, gunakan teknik flagging
                let isValidationSuccess=false
                for (let i=0; i<employeeArr.length; i++){                  
                    if (employeeArr[i]['username']===userName && employeeArr[i]['password']===password){
                        var validUserName = employeeArr[i]['username']
                        isValidationSuccess=true
                        break
                    }
                }
                callBack(validUserName,isValidationSuccess)
            }
        })
    }
    
}

module.exports = Employee
//match_data('../JSON/employees.json')