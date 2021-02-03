import React from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import ComponentWillUnmount from "./components/ComponentWillUnmound";
import PersonList from "./components/DynamicData";
import axios from "axios";
import ErrorHandler, {ErrorBoundary} from "./components/ui/ErrorHandler";
import Login from "./components/ui/Login";
import HooksExample from "./components/HooksExample";
import UseReducerHook from "./components/UseReducerHook";
import {RefHook, UseRefHook} from "./components/parts/UseRefHook";
import ForwardRefP from "./components/parts/ForwardRefP";
import UseMemoH from "./components/parts/UseMemoH";
import CustomHooks from "./components/parts/CustomHooks";
import CustomHookupdated from "./components/parts/CustomHookUpdated";
import SignUpForm from "./components/ui/SignUpForm";
import SignUpWithoutHook from "./components/ui/SignUpWithoutHook";

//import axios from "./components/utils/axios1";

function App(props: any) {
    let obj: Object = {
        url: 'todos/1',
        headers: {'headers1': 'headers', 'headers2': 'headers2'},
        params: {'params1': 'params1', 'params2': 'params2'}
    };
    const handleClick = () => {
        //`https://jsonplaceholder.typicode.com/users/1`
        axios.get(`https://jsonplaceholder.typicode.com/users/1`).then(json => console.log("called twice: ", json));
    };
    return (
        <div className="App">
            <>
                {props.state == 1 && <Button
                    onClick={handleClick}
                    variant="contained"
                >
                    button
                </Button>

                }{
                props.state == 3 && (<PersonList></PersonList>)
            }{
                props.state == 4 && (<ComponentWillUnmount></ComponentWillUnmount>)
            }{
                props.state == 5 && (<ErrorHandler></ErrorHandler>)
            }
                {
                    props.state == 6 && (<Login></Login>)
                }
                {
                    props.state == 7 && (<ErrorBoundary><HooksExample></HooksExample></ErrorBoundary>)
                }
                {
                    props.state == 8 && (<ErrorBoundary><UseReducerHook></UseReducerHook></ErrorBoundary>)
                }
                {
                    props.state == 9 && (<ErrorBoundary><UseRefHook></UseRefHook><RefHook></RefHook></ErrorBoundary>)
                }
                {
                    props.state == 10 && (<ErrorBoundary><ForwardRefP></ForwardRefP></ErrorBoundary>)
                }
                {
                    props.state == 11 && (<ErrorBoundary><UseMemoH></UseMemoH></ErrorBoundary>)
                }
                {
                    props.state == 12 && (<ErrorBoundary><CustomHooks></CustomHooks></ErrorBoundary>)
                }
                {
                    props.state == 13 && (<ErrorBoundary><CustomHookupdated></CustomHookupdated></ErrorBoundary>)
                }
                {
                    props.state == 14 && (<ErrorBoundary><SignUpForm></SignUpForm></ErrorBoundary>)
                }
                {
                    props.state == 15 && (<ErrorBoundary><SignUpWithoutHook></SignUpWithoutHook></ErrorBoundary>)
                }
            </>

        </div>
    );
}

export default App;
