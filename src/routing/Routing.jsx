import {BrowserRouter, Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../components/ui/headers/Header";
export default function Routing(props) {
    const useStyles = makeStyles((theme) => ({
        basics: {
            "text-align":"left"
}
}))
    ;

    const classes = useStyles();
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <>
                    <Route exact path={"/"} component={() => <div className={classes.basics}>Home&amp;%!^#&!#(!#</div>}></Route>
                    <Route exact path={"/services"} component={() => <div  className={classes.basics}>services</div>}></Route>
                    <Route exact path={"/aboutus"} component={() => <div className={classes.basics}>aboutus</div>}></Route>
                    <Route exact path={"/home"} component={() => <div className={classes.basics}>home</div>}></Route>
                    <Route exact path={"/contactus"} component={() => <div className={classes.basics}>contactus</div>}></Route>
                    <Route exact path={"/service1"} component={() => <div  className={classes.basics}>service1</div>}></Route>
                    <Route exact path={"/service2"} component={() => <div className={classes.basics}>service2</div>}></Route>
                    <Route exact path={"/service3"} component={() => <div className={classes.basics}>service3</div>}></Route>
                    <Route exact path={"/service4"} component={() => <div className={classes.basics}>service4</div>}></Route>

                </>
            </Switch>
        </BrowserRouter>
    );
}