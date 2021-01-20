import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, TextField} from "@material-ui/core";

const CustomHooks = () => {
    const [searchQuery, setSearchQuery] = useState("hello");
    const [results, setResults] = useState([]);

    async function searchWikipedia(searchQuery) {
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        const response = await axios.get(endpoint);
        console.log(response.data);
        setResults(response.data.query.search);
    }
    const [text, setText] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearchQuery(text);
    };

    useEffect(() => {
        searchWikipedia(searchQuery)
    }, [searchQuery])
    return (
        <>Text <TextField id="filled-basic" onChange={handleText} label="Filled"
    variant="filled"/>
        <Button onClick={handleSearch} variant="contained"> button </Button>
        <List list={results}/>
</>
    );
};

const List = ({list}) => {
    return (
        <ul>
            {list.map((result) => (
                <li key={result.pageid}>
                    <div className="result-item">
                        <h3 className="result-title">
                            <a href={"#"}>{result.title}</a>
                        </h3>
                        <div dangerouslySetInnerHTML={{__html:result.snippet}} />
                    </div>
                </li>
            ))}
        </ul>)
}
export default CustomHooks;
