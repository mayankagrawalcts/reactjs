import React, {useState} from 'react'
import {Button, CssBaseline, Grid, Typography,} from '@material-ui/core';
import {Demo, Input} from "../controls";
import axios from "axios";

const initialFValues = {
    "name": "",
    "job": "",
    "id": "",
    "createdAt": "",
    email: ""
}

export default function SignUpWithoutHook(props) {

    const validate = (fieldValues) => {
        let temp = {...errors}
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        validate({[name]: value})
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    const handleSubmit = e => {
        if (validate(values)) {
            console.log("valid data");
            axios.post("https://reqres.in/api/users", values).then(res => {
                console.log("extra info: ", res.status, res.statusText, res.headers);
                console.log("resource created", res.data)
            })
        } else {
            console.log("invalid data:", errors);
        }
    }

    return (
        <><CssBaseline/>
            <Grid container justify={"center"} alignItems={"center"} direction={"column"} spacing={3}>
                <Grid item>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                </Grid>
                <Grid item>
                    <Demo
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleInputChange}
                        helperText={errors.name}
                    />
                </Grid>
                <Grid item>
                    <Input
                        name="email"
                        onChange={handleInputChange}
                        value={values.email}
                        helperText={errors.email}
                    /></Grid>
                <Grid item>
                    <Input
                        label="Job"
                        name="job"
                        value={values.job}
                        onChange={handleInputChange}
                        helperText={errors.job}
                    /></Grid>
                <Grid container justify={"center"} alignItems={"center"}>
                <Grid item>
                    <Button variant={"contained"} color={"primary"} onClick={handleSubmit}> submit form</Button>
                </Grid>
                <Grid item >
                    <Button variant={"contained"} color={"primary"} onClick={resetForm}
                            style={{marginLeft: '10px'}}> Reset</Button>
                </Grid></Grid>

            </Grid></>
    )
}