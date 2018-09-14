class EmployeeView{
   
    static displayLogin(user){
        if(user !== '') {
            console.log('User ' + user + ' logged in successfully')
        }else{
            console.log('Maaf User / Password Salah')
        }
    }

}

module.exports = EmployeeView;