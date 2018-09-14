const controller = require('./controller.js')
const input = process.argv

if(input[2] === 'showEmployes'){
    controller.showEmploye()
}else if(input[2] === 'register'){
    controller.addEmploye(input[3],input[4],input[5],input[6])
}