import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CustomSnakbar = (props) => {
    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                autoHideDuration={props?.snakbarProps?.duration || 2000}
                open={props?.snakbarProps?.open || false}
                onClose={props?.handleClose.bind(this)}
                message={props?.snakbarProps?.message || null}
                onClick={props?.handleClose?.bind(this)}
                severity={props?.snakbarProps?.severity || "success"}
            >
                <Alert severity={props?.snakbarProps?.severity || "success"}>{props?.snakbarProps?.message || null}</Alert>
            </Snackbar>
        </>
    );
};
