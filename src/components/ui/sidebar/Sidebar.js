import React, {useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import map from "./SidebarIcons";

import {menu} from "./menu";
import {hasChildren} from "./utils";
import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return menu.map((item, key) => <MenuItem key={key} item={item}/>);
}

    const MenuItem = ({item}) => {
        const Component = hasChildren(item) ? MultiLevel : SingleLevel;
        return <Component item={item}/>;
    };

    const SingleLevel = ({item}) => {
        return (
            <ListItem button component={NavLink} to={item.to}>
                <ListItemIcon>{item.icon && map.get(item.icon)}</ListItemIcon>
                <ListItemText primary={item.title}/>
            </ListItem>
        );
    };

    const MultiLevel = ({item}) => {
        const {items: children} = item;
        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(!open);
        };

        return (
            <>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>{item.icon && map.get(item.icon)}</ListItemIcon>
                    <ListItemText primary={item.title}/>
                    {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="nav" disablePadding>
                        {children.map((child, key) => (
                            <MenuItem key={key} item={child}/>
                        ))}
                    </List>
                </Collapse>
            </>
        );
    };
