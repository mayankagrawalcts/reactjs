import React from 'react';
import {AUTHENTICATED_USER} from "../../services/AuthService";
import Header from "./headers/Header";

const Welcome = (props) => {
    return (
        <>
            Hello {sessionStorage.getItem(AUTHENTICATED_USER)}

        </>
    );
};

export default Welcome;
