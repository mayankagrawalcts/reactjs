import {
    Avatar,
    Button,
    Container,
    CssBaseline, Grid,
    Link,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {useForm} from "../hooks/useForm";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from "react";

const LoginGrid = (props) => {
    const initialFValues = {username: "", password: "", authflag: 1};
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
            if (values.username == 'admin@littech.in' && values.password == 'secret') {
                props.history.push("/home");
            } else {
                alert('Incorrect Credntials!');
            }
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
                    </Grid></Grid></Grid></CssBaseline></>
    )
};

export default LoginGrid;