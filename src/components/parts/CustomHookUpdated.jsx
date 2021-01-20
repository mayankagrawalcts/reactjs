import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import useWikiSearch from "./useWikiSearch";

const CustomHookupdated = () => {
    const [searchQuery, setSearchQuery] = useState("Hello");
    const [results, searchWikipedia] = useWikiSearch(null);
    const [text, setText] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearchQuery(text);
    };

    useEffect(() => {
        if (searchQuery) {
            const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
            searchWikipedia(endpoint);
            console.log("searchQuery: ", searchQuery);
        }
    }, [searchQuery]);
    return (
        <><TextField onChange={handleText} label="Search Text"
                     variant="filled"/>
            <Button onClick={handleSearch} variant="contained"> button </Button>
            <List list={results}/>
        </>
    );
};

const List = ({list}) => {
    return (
        <ul>
            {list?.query?.search?.map((result) => (
                <li key={result.pageid}>
                    <div>
                        <h3>
                            <a href={"#"}>{result.title}</a>
                        </h3>
                        <div dangerouslySetInnerHTML={{__html: result.snippet}}/>
                    </div>
                </li>
            ))}
        </ul>)
}

export default CustomHookupdated;
