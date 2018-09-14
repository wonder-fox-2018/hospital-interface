let fs = require("fs")
let Model = require("../model/m_employee.js")
let View = require("../view/view.js")

class EmployeeController {
    
    static create(username, password, role){
        Model.create(username, password, role ,function(err,data){
            if(err){
                View.print(err)
            } else {
                console.log(data);
                View.print(`save data success  ${JSON.stringify(data[data.length-1])} Total employee :${data.length}`)
                
            }
        })
    }

    static login(username ,password ){
       Model.login(username,password,function(err,data){
            if(err){
                View.print(err)
            } else {
                let dataEmployee = JSON.parse(data)
                let msg = ''
                let check = false
                let tmp = ''
        
                for (let i = 0; i < dataEmployee.length; i++) {
                    if (dataEmployee[i].username === username && dataEmployee[i].password === password) {
                        check = true
                        tmp = dataEmployee[i]
                    } 
                }
                if (check === true) {
                    fs.readFile('./login.json','utf-8',(err,data) => {
                        if (err) throw err;
                        //console.log(data);
                        let convertData = JSON.parse(data)
                        convertData.push(tmp)
                        
                        let sendData = JSON.stringify(convertData)
                        fs.writeFile('login.json', sendData, (err) => {
                            if (err) throw err;
                            console.log('The file has been saved!');
                          });
                    })
                    View.print(`user ${tmp.username} logged in successfully`)  
                } else {
                    View.print(`username / password wrong`)
                }
            }   
        })
    }  
                    
        

        
                    

    
}



module.exports = EmployeeController 