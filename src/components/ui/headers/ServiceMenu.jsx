import { Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useStyles} from "./HeaderStyle";

export const ServiceMenu = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [value, setValue] = useState(0);

    function handleMenuClose(event) {
        setOpen(false);
        setAnchorEl(null);
    }

    const menuView= (
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
    )
    return {value,setValue,anchorEl,setAnchorEl,open,setOpen,menuView};
}