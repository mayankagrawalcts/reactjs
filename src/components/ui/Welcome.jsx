import React from 'react';
import {AUTHENTICATED_USER} from "../../services/AuthService";

const Welcome = (props) => {
    return (
        <div>
            Hello {sessionStorage.getItem(AUTHENTICATED_USER)}
        </div>
    );
};

export default Welcome;
