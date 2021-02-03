import React, {useState} from 'react';
import RoutingApp from "../routing/RoutingApp";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

export const TemplateContext = React.createContext(null);
export default function Main() {
    const [lightState, setLightState] = useState(true);
    const paletteType = lightState ? "light" : "dark";
    // let [state, setState] = useState(1);
    // const handleText = (event) => {
    //     if (event.target.value == '') setState(prevState => 1);
    //     else
    //         setState(prevState => parseInt(event.target.value));
    // }
    const arcBlue = "#0B72B9";
    const arcOrange = "#FFBA60";
    const arcGrey = "#868686";
    const theme = React.useMemo(
        () => createMuiTheme({
            palette: {
                type: paletteType,
                common: {
                    blue: arcBlue,
                    orange: arcOrange
                },
                primary: {
                    main: lightState ? arcBlue : arcGrey,
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
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: 300,

                }
            }
        }), [lightState]);
    return (<>
            {/* <TextField id="filled-basic" onChange={handleText} label="Filled" variant="filled"/>
            <App state={state}/>*/}
            {/*<Login></Login>*/}
            {/*<LoginGrid></LoginGrid>*/}
            <TemplateContext.Provider value={{lightState, setLightState}}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <RoutingApp/>
                </ThemeProvider>
            </TemplateContext.Provider>
        </>

    );
};