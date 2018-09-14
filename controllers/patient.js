const Patient = require('../models/patient')
const View = require('../views/view')
const controllerEmployee = require('./employee.js')

class ControllerPatient{

    static addPatient(arrOfPatientData){
        let patientName = arrOfPatientData[0]
        let diagnose = arrOfPatientData.slice(1)

        controllerEmployee.findBy('isLogin',true,(err,data)=>{
            if(!err && data.position == 'dokter'){
                Patient.read((err,data)=>{
                    if(!err){    
                        let newID = !data[data.length-1] ? 1 : data[data.length-1].id+1
                        let newPatient = new Patient( //id, name, diagnosis
                            newID, 
                            patientName, 
                            diagnose, 
                        )
                        Patient.create(newPatient,(err,newData)=>{
                            if(!err){
                                let msg = `data pasien berhasil ditambahkan, Total Pasien : ${data.length+1}`
                                View.print(msg)
                            } 
                            else throw err
                        })
                    }      
                })
            }
            else {
                View.print('tidak memiliki akses untuk add patient')
            }
        })
    }

}


module.exports = ControllerPatient