import axios from "axios";

export const AUTHENTICATED_USER = "authenticateUser";
export const TOKEN = "token";

export function AuthService() {
    let message = null;

    async function login(email, password) {
        let res = await axios.post("https://reqres.in/api/login", {"email": email, "password": password})
            .catch(err => {
                console.log("in error", err);
                return false;
            })
        if (res.status == 200) {
            sessionStorage.setItem(TOKEN, res.data);
            sessionStorage.setItem(AUTHENTICATED_USER, email);
            message = "login successfull";
            console.log("login success");
            return true;
        } else {
            console.log("login failed");
            message = "login failed";
            return false;
        }
    }

    function logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    }

    function isUserLoggedIn() {
        console.log("isUserLoggedIn: ", sessionStorage.getItem(AUTHENTICATED_USER) && sessionStorage.getItem(TOKEN) ? true : false)
        return sessionStorage.getItem(AUTHENTICATED_USER) && sessionStorage.getItem(TOKEN) ? true : false;
    }

    function getEmail() {
        return sessionStorage.getItem(AUTHENTICATED_USER) ? sessionStorage.getItem(AUTHENTICATED_USER) : null;
    }

    return {getEmail, isUserLoggedIn, logout, login};
}
