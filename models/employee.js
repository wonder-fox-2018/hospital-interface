var fs = require('fs');
var PatientModel = require('./patient.js');

class EmployeeModel {
    constructor(username, password, job) {
        this.username = username;
        this.password = password;
        this.job = job;
    }

    static register(username, password, job, callback) {
        var employee = new EmployeeModel(username, password, job);

        fs.readFile('./database/employees.json', 'utf8', function(err, employeeData) {
            var neatEmployeeData = JSON.parse(employeeData);
            neatEmployeeData.push(employee);

            var stringEmployeeData = JSON.stringify(neatEmployeeData, null, 4);
            fs.writeFile('./database/employees.json', stringEmployeeData, 'utf8', function(err) {
                if (err) throw err

                callback(neatEmployeeData);
            });
        });
    }

    static login(username, password, callback) {
        fs.readFile('./database/employees.json', 'utf8', function(err, employeeData) {
            var neatEmployeeData = JSON.parse(employeeData);
            var registered = false;

            for (var i = 0; i < neatEmployeeData.length; i++) {
                if (neatEmployeeData[i].username === username) {
                    registered = true;
                    var loggedInUser = neatEmployeeData[i];
                    break;
                } else {
                    registered = false;
                }
            }

            fs.readFile('./database/currentUser.json', 'utf8', function(err, currentUserData) {
                var currentUser = JSON.parse(currentUserData);

                if (currentUser.length === 0) {
                    currentUser.push(loggedInUser); 
                    var newCurrentUser = currentUser[0];
                    var stringCurrentUser = JSON.stringify(currentUser, null, 4);
                } else if (currentUser.length > 0) {
                    registered = false;
                    var numberLoggedIn = currentUser.length;
                }

                if (registered === true) {
                    fs.writeFile('./database/currentUser.json', stringCurrentUser, 'utf8', function(err) {
                        if (err) throw err
    
                        callback(newCurrentUser);
                    });
                } else if (registered === false) {
                    callback(numberLoggedIn);
                }
            });
        });
    }

    static addPatient(name, diagnosis, callback) {
        fs.readFile('./database/currentUser.json', 'utf8', function(err, currentUserData) {
            var currentUser = JSON.parse(currentUserData);

            if (currentUser.length > 0) {
                if (currentUser[0].job !== 'doctor') {
                    var errorNotDoctors = 'The current user is not a doctor';
                    callback(errorNotDoctors);
                } else {
                    fs.readFile('./database/patient.json', 'utf8', function(err, patientListData) {
                        var patientList = JSON.parse(patientListData);
                        if (patientList.length === 0) {
                            var newPatientId = 1;
                        } else {
                            var latestPatientId = patientList[patientList.length - 1].id;
                            var newPatientId = latestPatientId + 1;
                        }
    
                        var patient = new PatientModel(newPatientId, name, diagnosis);
                        patientList.push(patient);

                        var stringPatientList = JSON.stringify(patientList, null, 4);
    
                        fs.writeFile('./database/patient.json', stringPatientList, 'utf8', function(err) {
                            if (err) throw err

                            callback(patientList);
                        });
                    });
                }
            } else if (currentUser.length === 0) {
                var errorNoLoggedInUser = 'Only accessible by logged in user';
                callback(errorNoLoggedInUser);
            }
        });
    }

    static logout(callback) {
        fs.readFile('./database/currentUser.json', 'utf8', function(err, currentUserData) {
            var currentUser = JSON.parse(currentUserData);

            if (currentUser.length === 0) {
                var errorNoLoggedInUser = 'No one is logged in';
                callback(errorNoLoggedInUser);
            } else if (currentUser.length > 0) {
                currentUser.pop();

                var stringCurrentUser = JSON.stringify(currentUser, null, 4);

                fs.writeFile('./database/currentUser.json', stringCurrentUser, 'utf8', function(err) {
                    if (err) throw err
                    
                    var logOutSuccess = 'Log out success';
                    callback(logOutSuccess);
                });
            }
        });
    }
}

module.exports = EmployeeModel;
