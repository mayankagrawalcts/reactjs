import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginGrid from "../components/ui/LoginGrid";
import Welcome from "../components/ui/Welcome";
import AuthRoute from "./AuthRoute";

const RoutingApp = () => {
    return (<div><Router>
        <>

            <Switch>
                <Route path={"/login"} component={LoginGrid}></Route>
                {/*<Route path={"/welcome"} component={Welcome}></Route>*/}
                <AuthRoute path={"/welcome"} component={Welcome}></AuthRoute>
                <Route exact path={"/"} component={LoginGrid}></Route>
            </Switch>

        </>
    </Router></div>);

};

export default RoutingApp;
