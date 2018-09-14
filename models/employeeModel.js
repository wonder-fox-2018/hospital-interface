let fs = require('fs')

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = position
    // admin, dokter, receptionist, office boy
    this.username = username
    this.password = password
  }

  static register(username, password, role, callback) {
    fs.readFile('../employee.json', 'utf8', (err, dataJson) => {
        let result = JSON.parse(dataJson);
        let newEmployee = new Employee (username, password, role)
        result.push(newEmployee)
        let jsonEmployee = JSON.stringify(result)
        // console.log(result)
        fs.writeFile('../employee.json', jsonEmployee, (err) =>{
            callback(newEmployee, result.length)
        })
    });
  }
  
  static login(username, password, callback) {
      Employee.readFile()
    }

    static readFile(callback) {
        fs.readFile('../employee.json', 'utf8', (err, dataJson) => {
            let result = JSON.parse(dataJson);
            callback(result)
          })
    }
        

  static showList() {
      
  }
}

        
    


module.exports = Employee