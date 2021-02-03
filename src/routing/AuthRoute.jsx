import {Redirect, Route} from "react-router-dom";
import {AuthService} from "../services/AuthService";
import Header from "../components/ui/headers/Header";
import React from "react";

const AuthRoute = (props) => {
    const {isUserLoggedIn} = AuthService();
    {
        if (isUserLoggedIn()) {
            return (<><Header></Header><Route {...props}></Route></>);
        } else {
            return (<Redirect to="/login"></Redirect>);
        }
    }
    // return <Route {...props}></Route>;
};

export default AuthRoute;
