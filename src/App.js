import './App.css';
import axios1 from "./utils/axios1";
import Button from "@material-ui/core/Button";
import {ThemeProvider} from "@material-ui/styles";
import Theme from "./components/ui/Theme";
import Routing from "./components/Routing";
import PersonList from "./components/DynamicData";
import ComponentWillUnmount from "./components/ComponentWillUnmound";

function App(props) {
    let obj = {};
    const handleClick = () => {
        axios1.get(obj).then(json => console.log("called twice: ", json));
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
                props.state == 2 && (
                    <ThemeProvider theme={Theme}>
                        <Routing></Routing>
                    </ThemeProvider>
                )
            }{
                props.state == 3 && (<PersonList></PersonList> )
            }{
                props.state == 4 && (<ComponentWillUnmount></ComponentWillUnmount> )
            }
            </>
        </div>
    );
}

export default App;
