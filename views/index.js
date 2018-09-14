class View{
    static displayHelp(){
        console.log(`
            $node main.js #
            $node main.js help 
            $node main.js register <username> <password> <role>
            $node main.js update <id> <username> <password> <position>
            $node main.js login <username> <password>
            $node main.js logout <username>
            $node main.js addPatient <name> <diagnosis>
        `)
    }
    static notFound(){
        console.log(`use main.js help for command list`)
    }
    static display(data){
        console.log(data)
        
    }

}

module.exports = View