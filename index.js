const controller = require('./controller.js')
const input = process.argv

if(input[2] === 'showEmployes'){
    controller.showEmploye()
}