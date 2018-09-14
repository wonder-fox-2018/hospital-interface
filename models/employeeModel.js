const fs = require('fs')

class Employee {
  constructor(id, name, position, username, password) {
    this.id = id
    this.name = name
    this.position = position
    this.username = username
    this.password = password
    this._isLogin = false
  }
  get isLogin(){
    return this._isLogin
  }
  set isLogin(setLogin){
    this._isLogin = setLogin

    return this
  }

  static save(data, callbacksave){
    let parseToJSON = JSON.stringify(data, null, 2)
    fs.writeFile('./employee.json', parseToJSON, 'utf-8', (err,data)=>{
      callbacksave(err, null)
    })
  }
  static readFile(callback){
    fs.readFile('./employee.json', 'utf-8',(err,data) =>{
      let employees = JSON.parse(data)
      let employeesData = []
      employees.forEach(list => {
        let id = list.id
          let name  = list.name
          let position = list.position
          let username = list.username
          let password = list.password
        if(list._isLogin === true){
          let listEmployee = new Employee(id, name, position, username, password)
          listEmployee.isLogin = true
          employeesData.push(listEmployee)
        }
        else{
          employeesData.push(new Employee(id, name, position, username, password))
        }
        
      })
      // console.log(employeesData)
      callback(err, employeesData)
    })
  }

  static update(id, username, password, position, callbackUpdate, isLogin){
    Employee.readFile((err, data) => {
      let dataUpdate = []
      data.forEach(list => {
        if(list.id == id){
          let id = list.id
          let user = username
          let pass = password
          let pos = position
          if(isLogin === true){
            let updateThis = new Employee(id, user, pos, user, pass)
            updateThis.isLogin = true
            dataUpdate.push(updateThis)
          }else{
            dataUpdate.push(new Employee(id, user, pos, user, pass))
          }
        }
        else{
          dataUpdate.push(new Employee(list.id, list.username, list.position, list.username, list.password))
        }
      })
      Employee.save(dataUpdate, (err, data) => {

      })
      callbackUpdate(err, 'Data update successfully')
    })
  }

  static register(username, password, position, callbackRegister){
    Employee.readFile((err, data) =>{
      let addData = data
      let id = 0
      if(data.length === 0){
        id  = 1
      }
      else{
        for(let i = 0; i < data.length; i++){
          if( i === data.length-1){
            id = data[i].id + 1 // 
          }
        }
      }
      
      addData.push(new Employee(id, username, position, username, password))

      Employee.save(addData, (err, cbRegister) => {
        callbackRegister(err, `"username":"${username}","password":"${password}","role":"${position}". Total Employee : ${addData.length}`)
      })
    })
  }
  static login(username, password, loginOrLogout, callback){
    Employee.readFile((err, data) => {
      if(loginOrLogout === 'login'){
        let checkLogin = false
        data.forEach(list => {
          if(list.username === username && list.password === password){
            // list.isLogin = true
            checkLogin = true
            Employee.update(list.id, username, password, list.position, (err, data) =>{}, true)
            callback(null, `user ${username} logged in successfully`)
          }
        })
        if(checkLogin === false){
          callback(null, `username / password wrong !`)
        }
      }else{
        data.forEach(list => {
          if(list.username === username){
            // list.isLogin = true
            Employee.update(list.id, username, list.password, list.position, (err, data) =>{}, false)
            callback(null, `user ${username} logged out successfully`)
          }
        })
      }
      
    })
  }
}



module.exports = Employee
