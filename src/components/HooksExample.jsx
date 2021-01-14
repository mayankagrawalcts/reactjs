import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import axios from "axios";

const HooksExample = () => {
    let initState = {
        persons: [],
        person: undefined,
        id: 0,
        show: true,
        error: null
    }
    const [state, setState] = useState(initState);

    function handleText(event) {
        setState(prevState => {
            return {...prevState, id: event.target.value || 1}
        });
    }

    async function fetchData() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`).catch(err => {
            console.log("in error:", err.toString());
            state.error = err.toString();
        });
        const persons = res.data;
        setState(prevState => {
            return {...prevState, persons: persons, person: persons[0]}
        });
    }

    useEffect(() => {
            console.log(" in componentDidMount: ");
            fetchData().then(r => {});
            return () => {
                console.log("in componentWill unmount");
            }
        }, []
    );
    useEffect(event => {
        console.log("in componentDidUpdate", JSON.stringify(state.id));
        const url = `https://jsonplaceholder.typicode.com/users/${state.id || 1}`
        axios.get(url)
            .then(res => {
                const persons = res.data;
                setState(prevState => {
                    return {...prevState, person: persons}
                });
            }).catch(err => {
            console.log("in error:", err.toString());
            state.error = err.toString();
        })

    }, [state.id]);
    {
        if (state.error) {
            console.log("in error", state.error);
            throw new Error(state.error);
        }
    }
    return (
        <>
            <TextField id="filled-basic" onChange={handleText} label="Filled" variant="filled"/>

            {
                (<table>
                    <tbody>
                    <tr>
                        <td>
                            <ul>
                                {state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {state.person && (<li
                                    key={state.person.name}>{state.person.name}</li>)}
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>)
            }
        </>
    )
};


export default HooksExample;
