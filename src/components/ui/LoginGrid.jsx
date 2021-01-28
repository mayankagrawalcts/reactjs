import {Button, CssBaseline, Grid, Link, TextField, Typography} from "@material-ui/core";
import {useForm} from "../hooks/useForm";
import React, {useState} from "react";
import {AuthService} from "../../services/AuthService";
import {withSnackbar} from "../controls/WithSnackbar";
import {CustomSnakbar} from "../controls/CustomSnakbar";

const LoginGrid = (props) => {
    const initialFValues = {username: "", password: "", authflag: 1};
    const initsnakbar = {open: false, message: null, duration: 200000, severity: "success"}
    const [snakbar, setSnakbar] = useState(initsnakbar);
    const handleClose = () => {
        setSnakbar(initsnakbar);
    }
    const {login} = AuthService();
    const validate = (fieldValues) => {
        let temp = {...errors}
        if ('username' in fieldValues)
            temp.username = fieldValues.username ? "" : "Username is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "Password is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);
    const handleSubmit = e => {
        if (validate(values)) {
            console.log("in login: " + login(values.username, values.password));
            login(values.username, values.password).then(res => {
                if (res)
                    props.history.push(`/welcome`);
                else {
                    props.snackbarShowMessage("failed due to incorrect username/password","error");
                    setSnakbar({
                        open: true, message: "open by custom message", duration: 200000, severity: "error"
                    })
                }
            });


        }
    }
    return (
        <><CssBaseline>
            <Grid container justify={"center"}>
                <Grid container justify={"center"} alignItems={"center"} direction={"column"}>
                    <Grid item>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField type="username" placeholder="Username" name="username"
                                   variant="outlined" label={"Username"}
                                   value={values.username}
                                   onChange={handleInputChange}
                                   margin={"normal"}
                                   error={errors.username ? true : false}
                                   helperText={errors.username || null}
                                   required autoFocus/>
                    </Grid>
                    <Grid item>
                        <TextField type="password"
                                   placeholder="Password" name="password"
                                   margin={"normal"}
                                   variant="outlined"
                                   label={"Password"}
                                   value={values.password}
                                   onChange={handleInputChange}
                                   error={errors.password ? true : false}
                                   helperText={errors.password || null}
                                   required/><br/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary"
                                onClick={handleSubmit}
                        >Submit</Button><Button variant="contained" color="primary"
                                                onClick={resetForm}
                    >Reset</Button>
                    </Grid>
                    <Grid item><br/>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid></Grid></Grid><CustomSnakbar snakbarProps={snakbar}
                                                        handleClose={handleClose}></CustomSnakbar>
        </CssBaseline></>
    )
};

export default withSnackbar(LoginGrid);