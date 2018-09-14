class EmployeeView {
    constructor() {

    }

    static displayRegisterMessage(newEmployee, totalEmployee) {
        console.log(`Save data succeeded.
Newly registered employee data is: {"username": "${newEmployee.username}", "password": "${newEmployee.password}", "job": "${newEmployee.job}"}. 
Total current employees: ${totalEmployee}.`);
    }

    static displayLoginMessage(loggedInUser) {
        if (loggedInUser === undefined) {
            console.log("You're not a registered user. You can register now and come back here later.");
        } else if (loggedInUser === 1) {
            console.log('Other user is currently using this system. Please wait until he/she logs out.')
        } else {
            console.log(`User ${loggedInUser.username} has logged in successfully.`);
        }
    }

    static displayAddPatientMessage(totalPatient) {
        if (totalPatient === 'The current user is not a doctor') {
            console.log('Sorry, but this feature is only accessible by doctors.');
        } else if (totalPatient === 'Only accessible by logged in user') {
            console.log('You have to log in first to be able to use this feature.');
        } else if (typeof totalPatient === 'number') {
            console.log('Patient data has been successfully added to hospital database.');
            console.log(`Total current patients: ${totalPatient}.`);
        }
    }

    static displayLogoutMessage(response) {
        if (response === 'No one is logged in') {
            console.log('No user is currently log in right now. Therefore, no one can log out too.')
        } else if (response === 'Log out success') {
            console.log('User has logged out successfully.');
        }
    }
}

module.exports = EmployeeView;