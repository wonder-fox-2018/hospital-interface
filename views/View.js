class View {
    static displayEmployee(data){
        console.log(data)
    }

    static displayRegister(data, lengths){
        console.log(`Save data success ${data}. Total employee: ${lengths}`)
    }

    static displayLogin(username, lengths){
        if (username) console.log(`user ${username} logged in successfully`)
        else console.log(`username or password wrong`)
    }

    static displayAddPatient(data){
        console.log(data)
    }

    static displayLogout(data){
        console.log('LOG OUT SUCCESS FULLY')
    }
}

module.exports = View;