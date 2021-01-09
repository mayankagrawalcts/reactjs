import React from 'react';

import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            persons: [],
            person: undefined,
            id: 0,
            show: true
        }

    }

    handleClick() {
        console.log("in handleClick");
        this.setState(prevState => {
            return {...prevState, show: false}
        });
    }

    /*

        shouldComponentUpdate(prevProps, prevState){
            this.state.id==0 && this.setState(prevState => {
                return {...prevState, id: 1}
            });
            return this.state.id==0?true: prevState.id != this.state.id;
        }
    */

    componentDidUpdate(prevProps, prevState) {
        console.log("in componentDidUpdate");
        if (prevState.id != this.state.id) {
            const url = `https://jsonplaceholder.typicode.com/users/${this.state.id || 1}`
            axios.get(url)
                .then(res => {
                    const persons = res.data;
                    this.setState(prevState => {
                        return {...prevState, person: persons}
                    });
                })
        }
    }

    handleText(event) {
        this.setState(prevState => {
            return {...prevState, id: event.target.value || 1}
        });
        console.log("in handleText: ", this.state);
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState(prevState => {
                    return {...prevState, persons: persons, person: persons[0]}
                });
                console.log("componentDidMount: " + JSON.stringify(this.state));
            })

    }

    render() {
        return this.state.show ?
            (<>
                    <TextField id="filled-basic" onChange={this.handleText} label="Filled" variant="filled"/>
                    <Button
                        onClick={this.handleClick}
                        variant="contained"
                    >
                        button
                    </Button>
                    {
                        (<table>
                            <tbody>
                            <tr>
                                <td>
                                    <ul>
                                        {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {this.state.person && (<li
                                            key={this.state.person.name}>{this.state.person.name}</li>)}
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>)
                    }
                </>
            ) : null
    }
}