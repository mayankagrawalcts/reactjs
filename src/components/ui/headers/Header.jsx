import React, {useContext, useEffect} from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link, useHistory} from "react-router-dom";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {AppBar, Button, Fab, Switch, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import {TemplateContext} from "../../Main";
import ScrollTop from "./ScrollTop";
import {useStyles} from "./HeaderStyle";
import {ServiceMenu} from "./ServiceMenu";

const Header = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const {lightState, setLightState} = useContext(TemplateContext);
    const {value, setValue, anchorEl, setAnchorEl, open, setOpen, menuView} = ServiceMenu();
    useEffect(() => {
        console.log("window.location.pathname: ", window.location.pathname, "  value", value);
        switch (window.location.pathname) {
            case "/":
            case "home":
                value != 0 && setValue(0);
                break;
            case "/services":
                value != 1 && setValue(1);
                break;
            case "/aboutus":
                value != 2 && setValue(2);
                break;
            case "/contactus":
                value != 3 && setValue(3);
                break;
            default:
                value != 0 && setValue(0);
                break;
        }
    }, [value])

    function handleTabChange(event, newValue) {
        setValue(newValue);
        console.log("new Value:", newValue)
    }

    function handleOnMouseOverTab(event) {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    function themeHandler() {
        setLightState(!lightState);
    }

    function logout() {
        sessionStorage.clear();
        history.push(`/login`);
    }

    return (
        <>
            <AppBar position={"static"}>
                <Toolbar id="back-to-top-anchor">
                    <Typography variant={"h4"} color={"textSecondary"}>
                        Arc Development</Typography>
                    <Tabs value={value} onChange={handleTabChange} className={classes.tabContainer}>
                        <Tab className={classes.tab} component={Link} to={"/home"} label={"Home"}/>
                        <Tab className={classes.tab} aria-owns={anchorEl ? "service-menu" : undefined}
                             aria-haspopup={anchorEl ? true : undefined} component={Link}
                             onMouseOver={event => handleOnMouseOverTab(event)}
                             to={"/services"}
                             label={"Services"}/>
                        <Tab className={classes.tab} component={Link} to={"/aboutus"} label={"About Us"}/>
                        <Tab className={classes.tab} component={Link} to={"/contactus"} label={"Contact Us"}/>
                    </Tabs>
                    <Button variant={"contained"} color={"secondary"} onClick={logout}>Logout</Button>&nbsp;&nbsp;
                    <div><NightsStayIcon style={{"verticalAlign": "middle"}}/>
                        <Switch checked={lightState != false}
                                onChange={themeHandler} name="change Theme" inputProps={{"aria-label": "Change Theme"}}>
                        </Switch>
                        <WbSunnyIcon style={{"verticalAlign": "middle"}}/>
                    </div>
                </Toolbar>
            </AppBar>
            {menuView}
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </>
    )
}
export default Header;