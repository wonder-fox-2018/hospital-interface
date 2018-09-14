const Controller= require('./controllers/controller.js')
let command= process.argv[2]
if(command==='view'){
    Controller.readData()
}
else if(command==='register'){
    let username=process.argv[3]
    let password=process.argv[4]
    let tipe=process.argv[5]
    let hariKerja=process.argv[6]
    let noIjin=process.argv[7]
    Controller.registrasi(username,password,tipe,hariKerja,noIjin)
}
else if(command==='login'){
    let username=process.argv[3]
    let password=process.argv[4]
    Controller.login(username,password)
}
else if(command==='addPatient'){
    let idPasien=process.argv[3]
    let namaPasien=process.argv[4]
    let keluhan=process.argv.slice(5)
    Controller.addPatient(idPasien,namaPasien,keluhan)
}
else if(command==='logout'){
    Controller.logout()
}
    
//Controller.readData()
