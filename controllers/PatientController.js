const PatientModel = require('../models/PatientModel.js');
const View = require('../views/view.js');

class PatientController {
    static addPatient(name, diagnosis) {
        PatientModel.addPatient(name, diagnosis, function(validLogin) {

            if (!validLogin) {
                View.print('tidak memiliki akses untuk add patients!');
            }
        });
    }
}

module.exports = PatientController;