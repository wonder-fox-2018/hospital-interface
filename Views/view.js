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
}

module.exports = View