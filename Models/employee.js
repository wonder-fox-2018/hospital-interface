const fs = require('fs')

class Employee {
    constructor(name, position, username, password) {
      this.name = name
      this.position = position
      this.username = username
      this.password = password
    }

    addUser(userName, position, password,callBack){
        fs.readFile('./JSON/employees.json','utf8',(err,employeeStr)=>{
            if (err){
                callBack(err)
            }
            else  {
                var employeeArr=JSON.parse(employeeStr)
                var employee = new Employee(userName, position, userName, password)
                employeeArr.push(employee)
                var employeeToStr=JSON.stringify(employeeArr)
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
        //identitas login user sebelumnya langsung direplace oleh user yang login terbaru
        fs.readFile('./JSON/employees.json','utf8',(err,employeeStr)=>{
            if (err){
                callBack(err)
            }
            else {
                var employeeArr=JSON.parse(employeeStr)
                let isValidationSuccess=false
                for (let i=0; i<employeeArr.length; i++){                  
                    if (employeeArr[i]['username']===userName && employeeArr[i]['password']===password){
                        var loginArr=[]
                        loginArr.push(employeeArr[i])
                        var loginArrToStr = JSON.stringify(loginArr)
                        fs.writeFile('./JSON/login.json',loginArrToStr, (err)=>{
                            if (err){
                                callBack(err)
                            }
                            else {
                                var validUserName = employeeArr[i]['username']
                                isValidationSuccess=true
                                callBack(validUserName,isValidationSuccess)
                            }
                        })
                    }
                }
            }
        })
    }

    cekLogin(callBack){
        let isUserLogin = false
        fs.readFile('./JSON/login.json','utf8',(err,loginStr)=>{
            if (err){
                callBack(err)
            }
            else {
                let loginArr=JSON.parse(loginStr)
                if (loginArr.length===0){
                    callBack(isUserLogin,null)
                } 
                else if (loginArr.length===1) {
                    isUserLogin = true
                    callBack(isUserLogin,loginArr[0]['position'])
                }
            }
        })
    }

    checkOut(callBack){
        fs.readFile('./JSON/login.json','utf8',(err,loginStr)=>{
            if (err){
                callBack(err)
            }
            else {
                let loginArr=JSON.parse(loginStr)
                loginArr=[]
                let loginArrToStr=JSON.stringify(loginArr)
                fs.writeFile('./JSON/login.json',loginArrToStr, (err)=>{
                    if (err){
                        callBack(err)
                    }
                    else {
                        callBack('Anda telah berhasil logout')
                    }
                })
            }
        })

    }

}

module.exports = Employee