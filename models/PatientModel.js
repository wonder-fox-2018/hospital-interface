const fs = require('fs');

class Patient {
    constructor(id, name, diagnosis) {
      this.id = id
      this.name = name
      this.diagnosis = diagnosis
    }
  
    static addPatient(name, diagnosis, callback) {

      fs.readFile('./loggedin.json', 'utf8', function(err, data) {
        //let emptyLogin = JSON.parse(data).length === 0

        
        
        let validLogin = JSON.parse(data).role === 'dokter';
        callback(validLogin);
        if (validLogin) {
          fs.readFile('./patient.json', 'utf8', function(err, data) {
            if (err) throw err;
    
            let patients = JSON.parse(data);
    
            let newPatientId = patients.length + 1;
            
            let newPatient = new Patient(newPatientId, name, diagnosis);
    
            patients.push(newPatient);
    
            fs.writeFile('./patient.json', JSON.stringify(patients, null, 2), function(err){
              if (err) throw err;
            });
          })
        } 


      })




    }
  
  
}

module.exports = Patient;
