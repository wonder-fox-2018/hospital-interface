const fs = require('fs')

class Patient{
    constructor(num,name,diag){
        this.no = num,
        this.name = name,
        this.diagnosa = diag
    }

    addPatient(NULL,name,diag,callBack){
        fs.readFile('./JSON/patients.json','utf8',(err,patientStr)=>{
            if (err) {
                callBack(err)
            }
            else {
                var patientArr = JSON.parse(patientStr)
                let patient = new Patient(patientArr.length+1, name, diag.join(' '))
                patientArr.push(patient)
                var patientArrToStr = JSON.stringify(patientArr)
                fs.writeFile('./JSON/patients.json',patientArrToStr, (err)=>{
                    if (err){
                        callBack (err)
                    }
                    else {
                        callBack (patientArr.length)
                    }
                })
            }
        })
    }
}

module.exports = Patient