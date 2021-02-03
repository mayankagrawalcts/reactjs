import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
