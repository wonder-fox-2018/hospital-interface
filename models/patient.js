let fs = require('fs')

class PatientModel{
    constructor(id, name, diagnosis) {
        this.id = id
        this.name = name
        this.diagnosis = diagnosis
    }

    static getAll(callback) {
        fs.readFile('./patient.json', 'utf8', function(err, obj) {
            let dataObject = JSON.parse(obj)
            callback(dataObject)
        })
    }

    static add(name, diagnosis, callback) {
        PatientModel.getAll(function(data) {
            let patientId = null
            if(data.length === 0) {
                patientId = 1
            }else{
                patientId = data[data.length - 1].id + 1
            }
            let newPatient = new PatientModel(patientId, name, diagnosis)
            data.push(newPatient)
            let hasil = JSON.stringify(data)
            fs.writeFile('./patient.json', hasil, function() {
                callback(data)
            })
        })
    }

    static total() {
        
    }
}  

module.exports = PatientModel