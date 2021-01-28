import React, {useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="" {...props} />;
}

export const withSnackbar = WrappedComponent => {
    const initState = {
        open: false, message: null, duration: 6000, severity: "success"
    }
    return props => {
        const [state, setState] = useState(initState);

        /** error | warning | info */

        const showMessage = (message, severity = "success", duration = 6000) => {
            setState(prevState => {
                return {
                    ...prevState, message: message,
                    severity: severity, duration: duration, open: true
                }
            });
        };

        const handleClose = (event, reason) => {
            if (reason === "clickaway") {
                return;
            }
            setState(prevState => {
                return {...prevState, open: false}
            });
        };

        return (
            <>
                <WrappedComponent {...props} snackbarShowMessage={showMessage}/>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    autoHideDuration={state.duration}
                    open={state.open}
                    onClose={handleClose}
                    message={state.message}
                    onClick={handleClose}
                    severity={state.severity}
                >
                    <Alert severity={state.severity}>{state.message}</Alert>
                </Snackbar>
            </>
        );
    };
};
