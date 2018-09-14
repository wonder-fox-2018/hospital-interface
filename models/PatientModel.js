const fs = require('fs');
class Patient {
    constructor(id, name, diagnosis) {
      this.id = id
      this.name = name
      this.diagnosis = diagnosis
    }

    static readPatient(callback) {
      fs.readFile('./patient.json','utf-8', (err, data) => {
        callback(err, data)
      })
    }

    static getLastId(cb){
      this.readPatient((err, data) =>{
        let patients = JSON.parse(data) 
        let lastId = 0
        if (patients.length !== 0){
          lastId = patients[patients.length-1].id
        }      
        cb(err, lastId)
      })
    }

    static insertPatient(patient, disease, callback){
      this.readPatient((err, data) => {
        this.getLastId((err, lastId) => {
          let patients = JSON.parse(data)
          if (patients.length === 0) {
            lastId = 0
          }
          patients.push(new Patient(lastId+1, patient, disease))
          fs.writeFile('patient.json', JSON.stringify(patients, null, 2), (err) => {
          callback(err, patients)
        })
        })
        
        
      })
    }
  }

  module.exports = Patient;