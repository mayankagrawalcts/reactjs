import React from 'react';
import {TextField,Button} from "@material-ui/core";
const CreateUsers = () => {
    let initState={
        "name": "",
        "job": "",
        "id": "",
        "createdAt":""
    }

    return (
        <div>
            <TextField variant={"outlined"} color={"primary"}></TextField>
            <TextField variant={"outlined"} color={"primary"}></TextField>
<Button onClick={}>submit</Button>
        </div>
    );
};

export default CreateUsers;
