const Controller=require('./controllers/controller.js')
const argv= process.argv[2];

if (argv=="register"){
    let arr=[];
    for (let i = 3; i < process.argv.length; i++) {
        arr.push(process.argv[i])
    }
    Controller.register(arr);
}else if (argv=="login"){
    let arr=[];
    for (let i = 3; i < process.argv.length; i++) {
        arr.push(process.argv[i]);
    }
    Controller.login(arr);
}else if (argv.toLowerCase()=="addpatient"){
    let params=[];
    let str="";
    params.push(process.argv[3]);
    for (let i = 4; i < process.argv.length-1; i++) {
        str+= process.argv[i] + " ";
    }
    str+=process.argv[process.argv.length-1];
    params.push(str)
    Controller.addPatient(params);
}else if (argv.toLowerCase()=="logout"){
   
    Controller.logout();
}else{

    Controller.notFound();
}
