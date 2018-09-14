const Controller = require('./Controllers/controller.js')
const controller = new Controller()

const whatToDo = process.argv[2]
const userName = process.argv[3]
const password = process.argv[4]
const position = process.argv[5]

//buat objek baru, berarti lempar ke constroller
if (whatToDo==='register'){
    controller.addUser(userName, position, password )
}
else if (whatToDo==='login'){
    controller.login(userName,password)
}