const ModelPatient = require('../models/model').Patient
const ModelEmployee = require('../models/model').Employee
const View = require('../views/index')
class Controller {
  static help() {
    View.help()
  }

  static register(attributes) {
    ModelEmployee.register(attributes, (err, data)=> {
      if (err) View.display(err);
      let msg = `save data success ${JSON.stringify(data[data.length-1])}. Total employee : ${data.length}`
      View.display(msg)
    })
  }

  static login(attributes) {
    ModelEmployee.findAll((err, employees)=>{
      let isExist = false
      if (err) View.display(err);
      for (let i =0; i < employees.length; i++) {
        employees[i].login = false
      }
      for(let i =0; i < employees.length; i++) {
        if (employees[i].username === attributes[0] && employees[i].password === attributes[1]) {
          employees[i].login = true
          ModelEmployee.save(employees, err=>{
            View.display(err)
            return;
          })
          let msg = `user ${employees[i].username} logged in successfully`
          View.display(msg)
          isExist = true
          break;
        }  
      }
      if (isExist === false) {
        let msg = `username/password is wrong!`
        View.display(msg)
      }
    })
  }

  static addPatient(attributes) {
    ModelEmployee.findAll((err, employees)=>{
      if (err) View.display(err); 
      for (let i =0; i < employees.length; i++) {
        if (employees[i].login === true && employees[i].position === 'dokter') {
          ModelPatient.addPatient(attributes, (err2, data)=>{
            if (err2) View.display(err2);
            let msg = `new patient has been added successfully. total patient: ${data.length}`
            View.display(msg)
          })
        } else if (employees[i].login === true && employees[i].position !== 'dokter'){
          View.display(`sorry, you don't have permission to add patient. please login as a doctor`)
        }
      }
    })
  }

  static logout() {
    ModelEmployee.findAll((err, employees)=>{
      if (err) View.display(err); 
      for (let i =0; i < employees.length; i++) {
        if (employees[i].login === true) {
          employees[i].login = false
          ModelEmployee.save(employees, View.display)
          let msg = `user ${employees[i].username} has logged out successfully`
          View.display(msg)
          break;
        }
      } 
    })
  }
  
}

module.exports = Controller