class View {
  static help() {
    let msg = `
    List of commands:
    $ node app.js help #to show list of commands
    $ node app.js register <username> <password> <employee_role>
    $ node app.js login <username> <password>
    $ node app.js add:patient <patient_name> <diagnose> <insurance_type: bpjs/private>
    $ node app.js logout`
    console.log(msg)
  }

  static display(msg) {
    console.log(msg)
  } 
}

module.exports = View
