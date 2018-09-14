const Controller = require('./controllers/controller')

const procced = process.argv[2]
// if(procced === 'cek'){


if(procced === 'login'){
    const name = process.argv[3]
    const password = process.argv[4]
    Controller.login(name,password)
}
if(procced==='register'){
    const name = process.argv[3]
    const password = process.argv[4]
    const position = process.argv[5]
    Controller.register(name,password,position)
    
}
if(procced==='addPatient'){
    const id = process.argv[3]
    const name = process.argv[4]
    const diagnosis = process.argv[5]
    Controller.register(id,name,diagnosis)
    
}