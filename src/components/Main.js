import React, {useState} from 'react';
import RoutingApp from "../routing/RoutingApp";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import {api_url, app_id, env} from "../constants/appConstants";

export const TemplateContext = React.createContext(null);
export const sidebarContext = React.createContext(false);

export default function Main() {
    const [openSidebar, setOpenSidebar] = React.useState(false);

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
                    fontWeight: 900,
                }
            }
        }), [lightState]);
    return (<>
            {/* <TextField id="filled-basic" onChange={handleText} label="Filled" variant="filled"/>
            <App state={state}/>*/}
            {/*<Login></Login>*/}
            {/*<LoginGrid></LoginGrid>*/}
            <sidebarContext.Provider value={{openSidebar, setOpenSidebar}}>
                <TemplateContext.Provider value={{lightState, setLightState}}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <RoutingApp/>
                    </ThemeProvider>
                </TemplateContext.Provider>
            </sidebarContext.Provider>
            <div className="App">
                <p>env ID: {env}</p>
                <p>API Key: {api_url}</p>
                <p>app_id Key: {app_id}</p>
            </div>
        </>
    );
};