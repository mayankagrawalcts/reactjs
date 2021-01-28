import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import App from '../App';
import Login from "./ui/Login";
import LoginGrid from "./ui/LoginGrid";
import RoutingApp from "../routing/RoutingApp";

export default function Main() {
    let [state, setState] = useState(1);
    const handleText = (event) => {
        if (event.target.value == '') setState(prevState => 1);
        else
            setState(prevState => parseInt(event.target.value));
    }
    return (<>
           {/* <TextField id="filled-basic" onChange={handleText} label="Filled" variant="filled"/>
            <App state={state}/>*/}
            {/*<Login></Login>*/}
            {/*<LoginGrid></LoginGrid>*/}
<RoutingApp></RoutingApp>
            </>

    );
};