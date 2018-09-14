const fs = require('fs');
const EmployeesDataDir = './employee.json';
const loginDataDir = './loggedin.json';


class Employee {
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  static register(username, password, role, callback) {
    
    fs.readFile('./employee.json', 'utf8', function(err, data) {
      if (err) throw err;

      let employees = JSON.parse(data);
      let newEmployee = new Employee(username, password, role);
      employees.push(newEmployee);
      
      fs.writeFile('./employee.json', JSON.stringify(employees, null, 2), function(err){
        if (err) throw err;
        callback(employees);
      });
    });
  }

  static login(myUsername, myPassword,callback) {
    fs.readFile('./employee.json', 'utf8', function(err, data) {
      if (err) throw err;

      let employees = JSON.parse(data);
      
      let validLogin = false;
      let loggedInUser = null;
      employees.forEach(element => {
        let validUsername = element.username === myUsername;
        let validPassword = element.password === myPassword;

        if (validUsername && validPassword) {
          validLogin = true;
          loggedInUser = element;
        }
      });

      callback(validLogin);

      if (validLogin) {
        fs.writeFile('./loggedin.json',JSON.stringify(loggedInUser, null, 2), function(err){});
      }
    })
  }

  /* //TODO
  static logout(callback) {
    fs.readFile('./loggedin.json', 'utf8', function(err, data) {
      let loggedOutUser = JSON.parse(data);
  
    })
  } */


}

module.exports = Employee;

