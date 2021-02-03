import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginGrid from "../components/ui/LoginGrid";
import Welcome from "../components/ui/Welcome";
import AuthRoute from "./AuthRoute";
import {makeStyles} from "@material-ui/core/styles";

const RoutingApp = (props) => {
    const useStyles = makeStyles((theme) => ({
            basics: {
                "text-align": "left",
                "backgroundColor": theme.palette.type === "light" ? "blueviolet" : "darkorange"
            }
        }));

    const classes = useStyles();
    return (<Router>
        <>
            <Switch>
                <Route path={"/login"} component={LoginGrid}/>
                {/*<Route path={"/welcome"} component={Welcome}></Route>*/}
                <AuthRoute path={"/welcome"} component={Welcome}/>
                <AuthRoute exact path={"/services"}
                           component={() => <div className={classes.basics}>services</div>}/>
                <AuthRoute exact path={"/aboutus"}
                           component={() => <div className={classes.basics}>aboutus</div>}/>
                <AuthRoute exact path={"/home"}
                           component={() => <div className={classes.basics}>home</div>}/>
                <AuthRoute exact path={"/contactus"}
                           component={() => <div className={classes.basics}>contactus</div>}/>
                <AuthRoute exact path={"/service1"}
                           component={() => <div className={classes.basics}>service1</div>}/>
                <AuthRoute exact path={"/service2"}
                           component={() => <div className={classes.basics}>service2</div>}/>
                <AuthRoute exact path={"/service3"}
                           component={() => <div className={classes.basics}>service3</div>}/>
                <AuthRoute exact path={"/service4"}
                           component={() => <div className={classes.basics}>service4</div>}/>
                <Route exact path={"/"} component={LoginGrid}/>
            </Switch>
        </>
    </Router>);

};

export default RoutingApp;
