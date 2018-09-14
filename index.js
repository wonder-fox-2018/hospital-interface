let Controller = require("./controller/ctrEmployee.js")
let Patient = require("./controller/ctrPatient.js")
let fs = require("fs")

let command  = process.argv[2]

if (command === 'register') {
    Controller.create(process.argv[3], process.argv[4], process.argv[5])
} else if (command === 'login') {
    Controller.login(process.argv[3], process.argv[4])
} else if(command === 'addPatient') {
    Controller.login(process.argv[3], process.argv[4])
}




