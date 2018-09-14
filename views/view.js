
class View {
    static print(txt){
        console.log(txt);
    }

    static help(){
        console.log(
            `node main.js register <name> <password> <position>
            node main.js login <name> <password>
            node main.js addPatient <name> <diagnosa-1> <diagnosa-2> ... <diagnosa-n>
            node main.js logout
            node main.js help`
        );
    }
}

module.exports = View