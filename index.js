const Controller = require('./Controllers/controller.js')
const controller = new Controller()

const whatToDo = process.argv[2]
const userNameOrPatientNum = process.argv[3]
const passwordOrPatientName = process.argv[4]

//buat objek baru, berarti lempar ke constroller
if (whatToDo==='register'){
    const position = process.argv[5]
    controller.addUser(userNameOrPatientNum, position, passwordOrPatientName )
}
else if (whatToDo==='login'){
    controller.login(userNameOrPatientNum,passwordOrPatientName)
}
//cek apakah sudah login
else if (whatToDo==='addPatient'){
    const patientDiag = process.argv.slice(5)
    controller.addPatient(userNameOrPatientNum,passwordOrPatientName,patientDiag)
}
else if (whatToDo==='checkOut'){
    controller.checkOut()
}