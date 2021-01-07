import React, {Component} from 'react';
import {Button, TextField,Grid} from "@material-ui/core";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {counter: 0};
    }

    handleChange(event) {
        /*this.setState(prevState => {
            return {...prevState, counter: prevState.counter + 1}
        });*/
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <div>
                <Button color="primary" variant="contained" onClick={this.handleChange}> Counter+1</Button> <TextField
                id="counterTextField" aria-readonly value={this.state.counter}></TextField>
            </div>
        );
    }
}

export default Counter;