import React, {useContext, useEffect} from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link, useHistory, useLocation} from "react-router-dom";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import useTheme from "@material-ui/core/styles/useTheme";
import clsx from 'clsx';
import {
    AppBar,
    Button,
    Divider,
    Drawer,
    Fab,
    IconButton,
    Switch,
    Tab,
    Tabs,
    Toolbar,
    Typography
} from "@material-ui/core";
import {sidebarContext, TemplateContext} from "../../Main";
import ScrollTop from "./ScrollTop";
import {useStyles} from "./HeaderStyle";
import {ServiceMenu} from "./ServiceMenu";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";


import Sidebar from "../sidebar/Sidebar";

const Header = (props) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const {lightState, setLightState} = useContext(TemplateContext);
    const {value, setValue, anchorEl, setAnchorEl, open, setOpen, menuView} = ServiceMenu();
    const {openSidebar, setOpenSidebar} = React.useContext(sidebarContext);

    const theme = useTheme();
    const handleDrawerOpen = () => {
        setOpenSidebar(true);
    };

    const handleDrawerClose = () => {
        setOpenSidebar(false);
    };

    useEffect(() => {
        console.log("history: ", history, "  useLocation:", location);
        switch (location.pathname) {
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
    }, [location.pathname]);

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
            <AppBar position="static"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: openSidebar,
                    })}>
                <Toolbar id="back-to-top-anchor" component={"div"} variant={"dense"}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, openSidebar && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
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
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={openSidebar}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <Sidebar></Sidebar></Drawer>
        </>
    )
}
export default Header;