const fs = require('fs')
const EmployeeModel = require('./employeeModel')

class Patient {
    constructor(id, name, diagnosis) {
      this.id = id
      this.name = name
      this.diagnosis = diagnosis
    }

    static save(data, callbacksave){
      let parseToJSON = JSON.stringify(data, null, 2)
      fs.writeFile('./patient.json', parseToJSON, 'utf-8', (err,data)=>{
        callbacksave(err, null)
      })
    }

    static readFile(callback){
      fs.readFile('./patient.json', 'utf-8',(err,data) =>{
        let patients = JSON.parse(data)
        let patientsData = []
        patients.forEach(list => {
          let id = list.id
          let name  = list.name
          let diagnosis = list.diagnosis
            patientsData.push(new Patient(id, name, diagnosis))
        })
        // console.log(patientsData)
        callback(err, patientsData)
      })
    }
  

    static addPatient(name, diagnosis, cbAddPatient){
      EmployeeModel.readFile((err, data) => {
        let isDokter = false
        data.forEach(list => {
          if(list._isLogin === true && list.position === 'dokter'){
            isDokter = true
            // console.log(data)
            Patient.readFile((err, dataPatients) => {
              let addPatient = dataPatients
              let id = 0
              if(dataPatients.length === 0){
                id  = 1
              }
              else{
                for(let i = 0; i < dataPatients.length; i++){
                  if( i === dataPatients.length-1){
                    id = dataPatients[i].id + 1 // 
                  }
                }
              }
              
              addPatient.push(new Patient(id, name, diagnosis))
              Patient.save(addPatient, (err, cbRegister) => {
                cbAddPatient(err, `"Patient Name":"${name}","Diagnosis":"${diagnosis}". Total Patients : ${addPatient.length}`)
              })

            })
          }
        })
        if(isDokter === false){
          console.log('kamu bukan dokter')
        }
      })

    }
}


module.exports = Patient