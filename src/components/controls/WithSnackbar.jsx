import React, {useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';

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
            setState(initState);
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
                    <Alert variant="filled" severity={state.severity}>{state.message}</Alert>
                </Snackbar>
            </>
        );
    };
};
