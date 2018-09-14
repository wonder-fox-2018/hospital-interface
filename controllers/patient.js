const PatientModel = require("../models/patient.js")
const InstancePatientModel = new PatientModel
const PatientView = require("../views/patient.js")
const InstancePatientView = new PatientView

class PatientController{
    add(nama, diagnosis) {
        PatientModel.add(nama, diagnosis, function(data){
            let total = data.length;
            PatientView.displayAdd(total)
        })
    }
}

module.exports = PatientController