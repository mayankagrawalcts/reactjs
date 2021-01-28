import {Redirect, Route} from "react-router-dom";
import {AuthService} from "../services/AuthService";

const AuthRoute = (props) => {
    const {isUserLoggedIn} = AuthService();

    {
        if (isUserLoggedIn()) {
            return (<Route {...props}></Route>);
        } else {
            return (<Redirect to="/login"></Redirect>);
        }
    }
   // return <Route {...props}></Route>;
};

export default AuthRoute;
