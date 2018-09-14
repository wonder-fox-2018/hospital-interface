const PatientModel = require('../models/patientModel')
const View = require('../views')

class ControllerPatient{
    static addPatient(name, diagnosis){
        PatientModel.addPatient(name, diagnosis, (err, data) => {
            View.display(data)
        })
    }

}

module.exports = ControllerPatient