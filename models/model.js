const fs= require('fs')
class Patient {
  constructor(id, name,keluhan) {
    this.id =id 
    this.name = name
    this.diagnosis = keluhan
  }
}

class Employee {
  constructor(username,password,tipe) {
    this.username = username
    this.password = password,
    this.tipe=tipe
  }
  static readData(callback){
    fs.readFile('./employe.json',function(err,employiesString){
      if(err) throw err;
      let employies=JSON.parse(employiesString)
      for(let i=0;i<employies.length;i++){
        if(employies[i].tipe==='dokter'){
          employies[i]=new Dokter(employies[i].username,employies[i].password,employies[i].tipe,employies[i].hariKerja,employies[i].noIjin)
        }
        else if(employies[i].tipe==='dokter'){
          employies[i]=new OfficeBoy(employies[i].username,employies[i].password,employies[i].tipe,employies[i].shift,employies[i].pos)
        }
        else {
          employies[i]=new Admin(employies[i].username,employies[i].password,employies[i].tipe,employies[i].shift,employies[i].pos)
        }
      }
      callback(employies)
    })//end of Read
  }
  static registrasi(username,password,tipe,harKerja,noIjin,callback){
    fs.readFile('./employe.json',function(err,employiesString){
      if(err) throw err;
      let employies=JSON.parse(employiesString)
      if(tipe==='dokter'){
        employies.push(new Dokter(username,password,tipe,harKerja,noIjin))
        let jumlah=employies.length
        let employiesString=JSON.stringify(employies)
        fs.writeFile('./employe.json',employiesString, (err)=>{
          if(err)throw err
          callback(`save data succes Username: ${username}, password: ${password}, role: ${tipe}, total jumlah user : ${jumlah}`)
        })
      }
      else if(tipe==='officeboy'){
        employies.push(new Admin(username,password,tipe,harKerja,noIjin))
        let employiesString=JSON.stringify(employies)
        fs.writeFile('./employe.json',employiesString, (err)=>{
          if(err)throw err
          callback(`save data succes Username: ${username}, password: ${password}, role: ${tipe}`)
        })
      }
      else if(tipe==='admin'){
        employies.push(new OfficeBoy(username,password,tipe,harKerja,noIjin))
        let employiesString=JSON.stringify(employies)
        fs.writeFile('./employe.json',employiesString, (err)=>{
          if(err)throw err
          callback(`save data succes Username: ${username}, password: ${password}, role: ${tipe}`)
        })
      }
      else{
        callback(`Tidak Ada jabatan yang Sesuai!`)
      }
      
    })//end of Read
  }
  static login(userlogin,callback){
    fs.readFile('./login.json',function(err,loginString){
      if(err) throw err;
      let loginObject=JSON.parse(loginString)
      loginObject.push(userlogin)
      let loginChangetoString=JSON.stringify(loginObject)
      fs.writeFile('./login.json',loginChangetoString,(err)=>{
        if(err) throw err
        callback(`user ${userlogin.username} logged in succesfully!`)
      })
    })
  }
  static addPatient(id,nama,keluhan,callback){
    fs.readFile('./login.json',function(err,loginString){
      if(err) throw err;
      let loginObject=JSON.parse(loginString)
      let hakAkses=loginObject[loginObject.length-1].tipe
      if(hakAkses==='dokter'){
          fs.readFile('./patient.json',function(err,patientString){
            if(err) throw err
            let patientObject=JSON.parse(patientString)
            patientObject.push(new Patient(id,nama,keluhan))
            let patientInString=JSON.stringify(patientObject)
            fs.writeFile('./patient.json',patientInString,(err)=>{
              if(err) throw err
              callback(`data pasien berhasil ditambahkan. Total data pasien:${patientObject.length}`)
            })
          })
      }else{
        callback(`Anda Tidak Memiliki Hak Akses!`)
      }
    })
  }
  static logout(callback){
    fs.readFile('./login.json',function(err,allLogin){
      if(err) throw err
      let allLoginOnObject=JSON.parse(allLogin)
      let user=allLoginOnObject[allLoginOnObject.length-1].username
      allLoginOnObject.pop();
      fs.writeFile('./login.json',JSON.stringify(allLoginOnObject),(err)=>{
        if(err) throw err
        callback(`username :${user} sukses logout!`)
      })
    })
  }
}
class Dokter extends Employee{
  constructor(username,password,tipe,hariKerja,noIjin,pasien){
    super(username,password,tipe)
    this.hariKerja=hariKerja
    this.noIjin=noIjin
  }
}
class OfficeBoy extends Employee{
  constructor(username,password,tipe,shift,area){
    super(username,password,tipe)
    this.shift=shift
    this.area=area    
  }
}
class Admin extends Employee{
  constructor(username,password,tipe,shift,pos){
    super(username,password,tipe)
    this.shift=shift
    this.pos=pos    
  }
}
module.exports=Employee