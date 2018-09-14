class View {
    static print(value) {
        console.log(value)
    }

    static register(newUser, dataLength) {
        console.log('save data success', newUser, dataLength);
    }

    static login(value) {
        console.log(value);
    }
}

module.exports = View;