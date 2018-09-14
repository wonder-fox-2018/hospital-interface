let fs = require("fs")
class Patient {
  constructor(nama, penyakit) {
    this.nama = nama
    this.penyakit = penyakit
  }
    
  static create( nama, penyakit, callback){
    fs.readFile('./patient.json','utf-8',function(err,data){
    if (err) {
        callback(err,data)
    }
    let result = JSON.parse(data)
    result.push(new Patient(nama,penyakit))
    fs.writeFile('./patient.json',JSON.stringify(result, null, 2),'utf-8',(err) =>{
      callback(err,result)
      })
    })
  } 
}
