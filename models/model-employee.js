const fs = require('fs')


class ModelEmployee {
    constructor(username, password, position) {
        this.username = username;
        this.password = password;
        this.position = position;
    }

    static read (callback) { 
        fs.readFile('./db-employee.json', 'utf8', (err, employeeData) => {
            let jsonUser = JSON.parse(employeeData);
            callback(jsonUser);
        })
    }


    static register (username, password, position, callback) {
        fs.readFile('./db-employee.json', 'utf8', (err, employeeData) => {
            if (err) throw err;
            let jsonUser = JSON.parse(employeeData);
            let newUser = new ModelEmployee(username, password, position);
            jsonUser.push(newUser);
            let userLength = jsonUser.length;
            let stringNewUser = JSON.stringify(newUser);
            let stringUser = JSON.stringify(jsonUser)
           
            fs.writeFile('./db-employee.json', stringUser, 'utf8', (err) => {
                if (err) throw err;
                callback(stringNewUser, userLength);
            })
        })
    }

    static login (username, password, callback) { 
        fs.readFile('./db-employee.json', 'utf8', (err, employeeData) => { // nanti ganti addressnya
            if (err) throw err;
            let jsonUser = JSON.parse(employeeData);
            let isLoggedIn = false;
            for (let i=0; i<jsonUser.length; i++) {
                if (jsonUser[i].username === username && jsonUser[i].password == password) {
                    isLoggedIn = true;
                    let userLoggedIn = JSON.stringify(jsonUser[i]);
                    fs.writeFile('./logged-in.json', userLoggedIn, 'utf8', (err) => {
                        if (err) throw err;
     
                    })
                    break;
                }
            }
            callback(isLoggedIn)
        })
    }
}




module.exports = ModelEmployee;


