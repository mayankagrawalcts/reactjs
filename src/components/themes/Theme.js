import {createMuiTheme} from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
export default createMuiTheme({
    palette: {
            common: {
                blue: arcBlue,
                orange: arcOrange
            },
            primary: {
                main: arcBlue
            },
            secondary: {
                main: arcOrange
            }
    },
    typography: {
        h4: {
            fontWeight: 400
        },
        tab: {
            fontFamily: "Roboto-Black",
            fontSize:"1rem",
            textTransform:"none",
            fontWeight: 300,

        }
    }
});