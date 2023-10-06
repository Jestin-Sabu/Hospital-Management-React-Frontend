class User {

    constructor(username, firstName, lastName, address, pin, mobileNumber, email, password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.pin = pin;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.password = password;
        this.role = ['patient'];
        this.token = '';
    }

}

export default User;