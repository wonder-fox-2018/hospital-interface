var Patient = require('../models/patient.js');

class PatientModel {
    constructor(id, name, diagnosis) {
        this.id = id;
        this.name = name;
        this.diagnosis = diagnosis;
    }
}

module.exports = PatientModel;