import React from 'react';
import {Button, TextField} from "@material-ui/core";

const UseMemoH = () => {
    const users = [
        {id: 'a', name: 'Robin'},
        {id: 'b', name: 'Dennis'},
    ];
    const [text, setText] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text);
    };

    const filteredUsersWithMemo = React.useMemo(
        () =>
            users.filter((user) => {
                console.log('filteredUsersWithMemo function is running ...',search);
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        [search]
    );

    const filteredUsers = users.filter((user) => {
        console.log('Filter function is running ...',search);
        return user.name.toLowerCase().includes(search.toLowerCase());
    });
console.log("reloaded again");
    return (
        <div>
            text <TextField id="filled-basic" onChange={handleText} label="Filled"
                            variant="filled"/>
            <Button onClick={handleSearch} variant="contained"> button </Button>
            <List list={filteredUsers}/>
            <List list={filteredUsersWithMemo}/>

        </div>
    );
};

const List = ({list}) => {
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default UseMemoH;
