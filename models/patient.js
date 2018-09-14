const fs = require('fs')
const databasePatient = './database/patient.json'

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }

  //read
  static read(callback){ 
    fs.readFile(databasePatient,'utf8',(err,data)=>{
      if(!err) callback(null,JSON.parse(data))
      else callback(err,null)
    })
  }

  //write
  static write(newdata){
    fs.writeFile(databasePatient,JSON.stringify(newdata,null,2),'utf-8',(err)=>{
      if(err) throw err
    })
  }

  //create
  static create(nePatientObj,callback){
    this.read((err,data)=>{
      if(!err){
        data.push(nePatientObj)
        this.write(data)
        callback(null, nePatientObj)
      } 
      else 
        callback(err,null)
    })
  }
}

module.exports = Patient