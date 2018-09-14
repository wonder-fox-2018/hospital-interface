const Employee = require('../models/employee')
const View = require('../views/view')

class Controller{

    static register(arrOfEmployeeData){
        Employee.read((err,data)=>{
            if(!err){    
                let newID = !data[data.length-1] ? 1 : data[data.length-1].id+1
                let newEmployee = new Employee(
                    newID, //id
                    arrOfEmployeeData[0], //username
                    arrOfEmployeeData[1], //password
                    arrOfEmployeeData[2], //position
                )
                Employee.create(newEmployee,(err,newData)=>{
                    if(!err){
                        let msg = `Save data success, username: ${newData.username}, Total Employee : ${data.length+1}`
                        View.print(msg)
                    } 
                    else throw err
                })
            }      
        })
    }

    static findBy(key,value,callback){  //helper
        Employee.read((err,data)=>{
            if(!err){
                let found = data.find(emplloyee=>{
                    return emplloyee[key] == value
                })
                callback(null,found)
            }
            else callback(err,null)
        })
    }

    static login(loginKeyArr){ //[username,password]
        let username = loginKeyArr[0]
        let password = loginKeyArr[1]
        Employee.read((err,data)=>{
            if(!err){
                let index = data.findIndex(value=>{
                    return value.username == username && value.password == password
                })
                if(index != -1){
                    data.forEach(objEmployee => {
                      objEmployee.isLogin = false  
                    })
                    data[index].isLogin = true
                    Employee.write(data)
                    let msg = `User ${data[index].username} - ${data[index].position} logged in successfully`
                    View.print(msg)    
                }
                else View.print('wrong username / password')
            }
            else throw err
        })        
    }

    static logout(){
        Employee.read((err,data)=>{
            if(!err){
                let index = data.findIndex(value=>{
                    return value.isLogin == true
                })
                if(index != -1){
                    data[index].isLogin = false
                    Employee.write(data)
                    let msg = `User ${data[index].username} logout successfully`
                    View.print(msg)    
                }
                else View.print('nothing to logout')
            }
            else throw err
        })   
    }

}


module.exports = Controller