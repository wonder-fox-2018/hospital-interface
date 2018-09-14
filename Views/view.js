class View {
    addFile(userData){
        console.log(`save data success ${JSON.stringify(userData[userData.length-1])}. Total employee ${userData.length}`)
    }

    loginSuccess(userLogin){
        console.log(`user ${userLogin} logged in successfully`)
    }

    loginFailed(){
        console.log('username / password wrong')
    }

    notDoctorPosition(){
        console.log('tidak memiliki akses untuk add patients!')
    }

    notLoggedIn(){
        console.log('silahkan login terlebih dahulu')
    }

    addPatient(totalPatient){
        console.log(`data pasien berhasil ditambahkan. Total data pasien : ${totalPatient}`)
    }

    checkOut(result){
        console.log(result)
    }
}

module.exports = View