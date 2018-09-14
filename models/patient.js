const fs = require('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  static addPatient(input, cb){
    console.log(input);
    
    this.readFile('./patient.json', (err, data) => {
      if(err){
        cb(err, null)
      } else {
        let allPatient = JSON.parse(data)
        let id = 1
        if (allPatient.length !== 0){
          id = allPatient[allPatient.length-1].id +1
        }
        let newPatient = new Patient(id, input[0], input.slice(1))
        allPatient.push(newPatient)
        this.writeFile('./patient.json', allPatient, err => {
          cb(err, allPatient)
        })
      }
    })
  }

  static readFile(name, cb){
    fs.readFile(name, 'utf8', (err, data) => {
        cb(err, data)
    })
}

static writeFile(name, file, cb){
    fs.writeFile(name, JSON.stringify(file, null, 2), (err) => {
        cb(err)
    })
}
}

module.exports = Patient