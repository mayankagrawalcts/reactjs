import React from 'react'
import {Button, Grid,} from '@material-ui/core';
import {Input,Demo} from "../controls";
import {useForm} from '../hooks/useForm';
import axios from "axios";

const initialFValues = {
    "name": "",
    "job": "",
    "id": "",
    "createdAt": "",
    email: ""
}

export default function SignUpForm(props) {

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
        <Grid container justify={"center"}>
            <Grid container justify={"center"} direction={"column"} xs={3}>
                <Grid item>
                    <Demo
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleInputChange}
                        style={{marginBottom: "10px"}}
                        error={errors.name}
                    />
                </Grid>
                <Grid item>
                    <Input
                        name="email"
                        onChange={handleInputChange}
                        error={errors.email}
                        style={{marginBottom: "10px"}}
                    /></Grid>
                <Grid item>
                    <Input
                        label="Job"
                        name="job"
                        value={values.job}
                        onChange={handleInputChange}
                        error={errors.job}
                        style={{marginBottom: "10px"}}
                    /></Grid>
                <Grid item>
                    <Button variant={"contained"} color={"primary"} onClick={handleSubmit}> submit form</Button>
                    <Button variant={"contained"} color={"primary"} onClick={resetForm}
                            style={{marginLeft: '10px'}}> Reset</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}