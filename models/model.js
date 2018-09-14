
class Patient {
  constructor(id, name, diagnosis, insuranceType) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
    this.insuranceType = insuranceType
  }
  static addPatient(attributes, callback) {
    const fs = require('fs')
    fs.readFile('./patient.JSON', 'utf8', (err, data)=>{
      if (err) {
        callback(err, null);
      } else {
        let patients = JSON.parse(data)
        var patientId = 0
        if (patients.length  < 1) {
          patientId = 1
        } else {
          patientId = patients[patients.length-1].id + 1
        }
        let name  = attributes[0],
            diagnose = attributes[1],
            insuranceType = attributes[2]
        let newPatient = new Patient(patientId, name, diagnose, insuranceType)
        patients.push(newPatient)
        Patient.save(patients, err=>{
          callback(err, null)
        })
        callback(null, patients)
      }
    })
  }

  static save(data, callback) {
    const fs = require('fs')
    fs.writeFile('./patient.JSON', JSON.stringify(data,null,2), 'utf8', (err)=>{
      if (err) callback(err);
    })
  }
}

class Employee {
  constructor(username, password, position) {
    this.username = username
    this.password = password
    this.position = position
  }

  static register(attributes, callback) {
    const fs = require('fs')
    fs.readFile('./employee.JSON', 'utf8', (err, data)=>{
      if (err) {
        callback(err, null);
      } else {
        let employees = JSON.parse(data)
        let username = attributes[0],
            password = attributes[1],
            position = attributes[2]
        let newEmployee = new Employee(username, password, position)
        employees.push(newEmployee)
        Employee.save(employees, err=>{
          callback(err, null);
        })
        callback(null, employees)
      }
    })
  }

  static findAll(callback) {
    const fs = require('fs')
    fs.readFile('./employee.JSON', 'utf8', (err, data)=>{
      if (err) callback(err, null);
      let employees = JSON.parse(data)
      callback(null, employees)
    }) 
  }

  static save(data, callback) {
    //callback -> view.display
    const fs = require('fs')
    fs.writeFile('./employee.JSON', JSON.stringify(data,null,2), 'utf8', (err)=>{
      if (err) callback(err);
    })
  }

}

module.exports = {
  Patient,
  Employee
}
