const controllerPatient = require('./controllers/patient.js')
const patient = new controllerPatient()
const controllerEmployee = require('./controllers/employee.js')
const employee = new controllerEmployee()

const runArgv = process.argv

if(runArgv[2] === 'addPatient') {
    let diagnosis = runArgv.slice(4)
    stringDiagnosis = diagnosis.join(' ')
    patient.add(runArgv[3], stringDiagnosis)
}else if(runArgv[2] === 'login') {
    employee.akses(runArgv[3], runArgv[4])
}