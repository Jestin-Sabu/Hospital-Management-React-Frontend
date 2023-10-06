import axios from "axios";

class LoginSignUpService {

    constructor() {
        this.baseURL = "http://localhost:8080/api/auth";
    }

    login = (user) => {
        var reply = [];
        return axios.post(`${this.baseURL}/signin`, user);
    };

    signUp = async (user) => {
        var reply = [];
        await axios.post(`${this.baseURL}/signup`, user).then((response) => {
            reply = [true, response];
        }).catch((error) => {
            reply =  [false, error]
        });
        return reply;
    };
}

export default LoginSignUpService;
