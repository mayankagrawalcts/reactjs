import  {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginGrid from "../components/ui/LoginGrid";
import Welcome from "../components/ui/Welcome";
import AuthRoute from "./AuthRoute";
import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../components/ui/headers/HeaderStyle";
import clsx from 'clsx';
import {sidebarContext} from "../components/Main";
import {Container} from "@material-ui/core";
import User from "../components/ui/User";

const RoutingApp = (props) => {
    const {openSidebar, setOpenSidebar}=useContext(sidebarContext);
    const useStyles = makeStyles((theme) => ({
        basics: {
           // "text-align": "left",
            "backgroundColor": theme.palette.type === "light" ? "blueviolet" : "darkorange",
            "marginLeft":0,
            "display":"flex",
            },
        dashboardShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            })},
            container:{
                "paddingLeft":theme.spacing(1),
                "paddingRight":0
            }
    }));

    const classes = useStyles();
    return (<Router>
        <>
            <Switch>
                <Route path={"/login"} component={LoginGrid}/>
                {/*<Route path={"/welcome"} component={Welcome}></Route>*/}
                <AuthRoute path={"/demo/test/welcome"} component={Welcome}/>
                <AuthRoute path={"/test/welcome"} component={Welcome}/>
                <AuthRoute path={"/demo/welcome"} component={Welcome}/>
                <AuthRoute path={"/welcome"} component={Welcome}/>
                <AuthRoute exact path={"/demo/test/services"}
                           component={() => <div className={classes.basics}>services</div>}/>
                <AuthRoute exact path={"/demo/services"}
                           component={() => <div className={classes.basics}>services</div>}/>
                <AuthRoute exact path={"/services"}
                           component={() => <Container maxWidth={"xl"} className={clsx(classes.basics,classes.container, {
                               [classes.dashboardShift]: openSidebar,
                           })}><div>services</div></Container>}/>
                <AuthRoute exact path={"/aboutus"}
                           component={() => <div className={classes.basics}>aboutus</div>}/>
                <AuthRoute exact path={"/home"}
                           component={() => <div><User></User></div>}/>
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
