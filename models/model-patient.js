const fs = require('fs')

class ModelPatient {
  constructor(id, patientName, diagnose) {
    this.id = id
    this.patientName = patientName
    this.diagnose = diagnose
  }

  static permission(callback) {
    fs.readFile('./logged-in.json', 'utf8', (err, loggedInUser) => {
      if (err) throw err;
      let user = JSON.parse(loggedInUser);
      let isAuthorised = false;
      if (user.position == 'dokter') {
        isAuthorised = true;
      }
      callback(isAuthorised);
    })
  }


  static addPatient(id, patientName, diagnose, callback) {
    fs.readFile('./db-patient.json', 'utf8', (err, listPatient) => {
      if (err) throw err;
      let jsonPatient = JSON.parse(listPatient);
      
      let newPatient = new ModelPatient(id, patientName, diagnose);
      jsonPatient.push(newPatient);
      let patientLength = jsonPatient.length;
      let stringjsonPatient = JSON.stringify(jsonPatient);
      
      fs.writeFile('./db-patient.json', stringjsonPatient, 'utf8', (err) => {
        if (err) throw err;
        callback(patientLength);
      })
      

    })
  }
}


module.exports = ModelPatient;
