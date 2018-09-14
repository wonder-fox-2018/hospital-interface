let fs = require('fs')

class Employee {
  constructor(username, password, role) {
    // this.name = name
    // admin, dokter, receptionist, office boy
    this.username = username
    this.password = password
    this.role = role
  }

  static register(username, password, role, callback) {
    fs.readFile('.../employee.json', 'utf8', (err, dataJson) => {
        let result = JSON.parse(dataJson);
        let newEmployee = new Employee (username, password, role)
        result.push(newEmployee)
        let jsonEmployee = JSON.stringify(result)
        // console.log(result)
        fs.writeFile('./employee.json', jsonEmployee, (err) =>{
            callback(newEmployee, result.length)
        })
    });
  }
  
  static login(username, password, callback) {
      fs.readFile('../login.json', 'utf8', (err, dataLogin) => {
          if(err) throw err
          let result = JSON.parse(dataLogin);
          result.push(username, password)
          let jsonLogin = JSON.stringify(result)
          fs.write('../login.json', jsonLogin, (err) => {
              callback(`user ${result.username} logged in succerssfully`)
          })
      })
    }

    static readFile(callback) {
        fs.readFile('../employee.json', 'utf8', (err, dataJson) => {
            let result = JSON.parse(dataJson);
            callback(result)
          })
    }
        

  static showList() {
      View.showList()
  }
}

        
    


module.exports = Employee