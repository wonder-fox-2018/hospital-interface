const Employee = require('../models/employee')
const Patient = require('../models/patient')
const View = require('../views/view')

class Controller {
    static addEmployee(input){
        Employee.addEmployee(input, (err, employees) => {
            if (err){
                View.print(err)
            } else {
                View.print( `Save data success ${JSON.stringify(employees[employees.length -1])}. Total employee : ${employees.length}` )
            }
        })
    }

    static login(input){
        Employee.readFile('./employee.json', (err, data) => {
            let employees = JSON.parse(data)
            if(err){
                View.print(err)
            } else {
                for (let i = 0; i < employees.length; i++) {
                    if(employees[i].name === input[0] && employees[i].password === input[1]){
                        Employee.login(employees[i], err => {
                            if(err){
                                View.print(err)
                            } else {
                                View.print(`User ${employees[i].name} logged in seccefully`)
                            }
                        })
                        return
                    }                  
                }
                View.print(`Wrong UserName / Password`)
            }
        })
    }

    static addPatient(input){
       Employee.cekDokter((err, data) => {
           if(err){
                View.print(err)
           } else if(data[0].position !== 'dokter'){
               View.print(`${data[0].name} tidak memiliki akses untuk add patients!`)
           } else if(data[0].position === 'dokter'){
                Patient.addPatient(input, (err, data) => {
                    if(err){
                        View.print(err)
                    } else {
                        View.print(`Data pasien ${data[data.length-1].name} berhasil ditambahkan. Total data pasien : ${data.length}`)
                    }
                })
           }
       })
    }

    static logout(){
        Employee.logout((err, data) => {
            if(err){
                View.print(err)
            } else {
                View.print(`User ${data} berhasil logout`)
            }
        })
    }

    static help(){
        View.help()
    }
}

module.exports = Controller