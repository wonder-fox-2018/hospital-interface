const fs = require('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
  static addPatient(){
    
  }
}


class Employee {
  constructor(username,password,position) {
    this.username = username
    this.password = password
    this.position = position
  }
  static readData(callback){
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
      if(err) throw err;
      let data1 = JSON.parse(data)
      callback(data1)  
    });
  }

  static register(name, password, position,callback){
    //1.read data ->string
    fs.readFile('./employee.json','utf8',(err,employString)=>{
      if(err) throw err
      //2. kita ubah kedalam bentuk object dan di temp agar data dapat dimodifikasi
      let employeObject=JSON.parse(employString) //[{arul   .....}]
      var newUser=null
      //3. membuat data baru dengan cetak classs
      if(position==='dokter'){
        newUser=new Dokter(name,password,position)
      }
      else if(position==='admin'){
        newUser=new Admin(name,password,position)
      }
      else if(position==='officeboy'){
        newUser=new OfficeBoy(name,password,position)
      }
      else{
        callback('Posisi tidak ada!')
      }
      //data di tambahkan
      employeObject.push(newUser)
      let total=employeObject.length;
      //4. save ke dalam json -> harus dikonversi terlebih dahulu ke string
      let employConverttoString=JSON.stringify(employeObject)
      fs.writeFile('./employee.json',employConverttoString,(err)=>{
        if(err) throw err
        callback(`save data succes {"username" : "${newUser.username}" "password" : "${newUser.password}", "position": "${newUser.position}"}. total employee :${total}`)
      })
    });
  }

  static login(user,password,callback){
    fs.readFile('./login.json','utf8',(err,login)=>{
      if(err) throw err
      let loginObj = JSON.parse(login)
      loginObj.push(user,password)//ditambahkan
      let loginStr = JSON.stringify(loginObj)
      fs.writeFile('./login.json', loginStr,(err)=>{
        if(err) throw err
        callback(`user ${user} logged in succesfully`)
      });
    })
  }



}
class Admin extends Employee{
  
}
class OfficeBoy extends Employee{
  
}
class Receptionist extends Employee {
  
}
class Dokter extends Employee{
  // constructor()

}








module.exports = { 
  Employee, Patient
}