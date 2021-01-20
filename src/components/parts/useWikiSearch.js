import React, {useState} from 'react';
import axios from "axios";

const useWikiSearch = (searchUrl) => {
    const [results, setResults] = useState([]);

    /*async function searchWikipedia(searchQuery) {
        //  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        if (searchQuery) {
            const response = await axios.get(searchQuery);
            setResults(response.data);
        }
    }*/

    function searchWikipedia(searchQuery) {
        //  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        if (searchQuery) {
            axios.get(searchQuery).then(response => {
                setResults(response.data);
            }).catch(err => {
                console.log("in error");
            })

        }
    }

    /*
        useEffect(() => {
            searchWikipedia(searchUrl)
        }, [])*/
    return [results, searchWikipedia];
};

export default useWikiSearch;
