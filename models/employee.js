const fs = require('fs')

class Employee {
    constructor(name, password, position) {
      this.name = name
      this.password = password
      this.position = position
    }

    static addEmployee (input, cb) {
        this.readFile('./employee.json', (err, data) => {
            if (err){
                View.print(err)
            } else {
                let employees = JSON.parse(data)
                employees.push( new Employee(input[0], input[1], input[2]) )
                this.writeFile('./employee.json', employees, err => {
                    cb(err, employees)
                })
            }
        })
    }

    static logout(cb){
        this.readFile('./login.json', (err, data) => {
            if(err){
                cb(err, null)
            } else {
                let login = JSON.parse(data)
                let name = login[0].name
                login = []
                this.writeFile('./login.json', login, err => {
                    cb(err, name)
                })

            }
        })
    }

    static cekDokter(cb){
        this.readFile('./login.json', (err, data) => {
            let login = JSON.parse(data)
            cb(err, login)
        })
    }

    static login(data, cb){
        this.writeFile('./login.json', [data], err => {
            cb(err)
        })
    }

    static readFile(name, cb){
        fs.readFile(name, 'utf8', (err, data) => {
            cb(err, data)
        })
    }

    static writeFile(name, file, cb){
        fs.writeFile(name, JSON.stringify(file, null, 2), (err) => {
            cb(err)
        })
    }

}


 module.exports = Employee