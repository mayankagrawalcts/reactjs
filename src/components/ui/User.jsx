import React, {useEffect, useState} from 'react';
import {api_url} from "../../constants/appConstants";
import {TextField} from "@material-ui/core";
import axios from "axios";

const initState =
    {
        "id": "1",
        "name": "Dr. Marguerite Lakin",
        "first_name": "Louisa",
        "last_name": "Quigley",
    }
const User = () => {

    const [user, setUser] = useState(initState);
    const updateUser = (event) => {
        setUser(prevState => {
            return {...prevState, id: event.target.value}
        });
    }
    useEffect(() => {
        axios.get(`${api_url}users/${user.id}`).then(result => {
            setUser(result.data);
        })
    }, [user.id])
    return (
        <>
            <div className="App">
                <TextField variant={"outlined"} value={user.id} onChange={updateUser}></TextField>
                <p>First Name: {user.first_name || user?.data?.first_name}</p>
                <p>Last Name: {user.last_name || user?.data?.last_name}</p>
            </div>
        </>
    );
};

export default User;
