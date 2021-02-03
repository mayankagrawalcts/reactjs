import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link, useHistory} from "react-router-dom";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {
    AppBar,
    Button,
    Fab,
    Menu,
    MenuItem,
    Switch,
    Tab,
    Tabs,
    Toolbar,
    Typography

} from "@material-ui/core";
import {TemplateContext} from "../../Main";
import ScrollTop from "./ScrollTop";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: "25px",
        minWidth: 10
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "#fff"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    switchTheme: {
        backgroundColor: theme.palette.primary.main,
        textAlign: "center"
    }
}));


const Header = (props) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const {lightState, setLightState} = useContext(TemplateContext);

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
        }
    }, [value])

    function handleTabChange(event, newValue) {
        setValue(newValue);
        console.log("new Value:",newValue)
    }

    function handleMenuClose(event) {
        setOpen(false);
        setAnchorEl(null);
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
            <Menu id="service-menu" classes={{paper: classes.menu}}
                  MenuListProps={{onMouseLeave: handleMenuClose}} open={open} anchorEl={anchorEl}
                  elevation={0}>
                <MenuItem classes={{root: classes.menuItem}} component={Link} to="/services"
                          onClick={(event) => {
                              handleMenuClose(event);
                              setValue(1)
                          }}>Services</MenuItem>
                <MenuItem classes={{root: classes.menuItem}} component={Link} to="/service1"
                          onClick={(event) => {
                              handleMenuClose(event);
                              setValue(1)
                          }}>Service1</MenuItem>
                <MenuItem classes={{root: classes.menuItem}} component={Link} to="/service2" onClick={(event) => {
                    handleMenuClose(event);
                    setValue(1)
                }}>Service2</MenuItem>
                <MenuItem classes={{root: classes.menuItem}} component={Link} to="/service3" onClick={(event) => {
                    handleMenuClose(event);
                    setValue(1)
                }}>Service3</MenuItem>
                <MenuItem classes={{root: classes.menuItem}} component={Link} to="/service4" onClick={(event) => {
                    handleMenuClose(event);
                    setValue(1)
                }}>Service4</MenuItem>
            </Menu>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </>
    )
}
export default Header;