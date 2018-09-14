let fs = require('fs')

class Employee {
    constructor(id, name, role) {
        this.id = id
        this.name = name
        this.role = role
    }
    
    static getAllAkses(username, password, callback) {
        fs.readFile('./akses.json', 'utf8', function(err, obj) {
            let objArr = JSON.parse(obj)
            let dataBalik = ''
            for(let i = 0; i < objArr.length; i++) {
                if(objArr[i].username === username && objArr[i].password === password) {
                    dataBalik = username
                }
            }
            callback(dataBalik)
        })
    }
    
    static getAllEmployee(callback) {
        fs.readFile('./employee.json', 'utf8', function(err, obj) {
            let objArr = JSON.parse(obj)
            callback(objArr)
        })
    }

    static add(name, role) {
        Employee.getAll(function(data) {
            let id = null
            if(data.length === 0) {
                id = 0
            }else{
                id = data[data.length - 1].id + 1
            }
            let tmp = new Employee(id, name, role)
            data.push(tmp)
            let hasil = JSON.stringify(data)
            fs.writeFile('./employee.json', hasil, function(err, obj) {
                
            })
        })
    }

}

module.exports = Employee