import React, {Component, useEffect, useRef, useState} from 'react';
import {TextField} from "@material-ui/core";

export class UseRefHook extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.myInput = React.createRef();
        this.anything = React.createRef();
        this.state = {sayings: ""};
    }

    handleChange(e) {
        this.setState({sayings: this.anything.current.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.sayings != prevState.sayings) {
            this.myInput.current.value = this.state.sayings;
        }
    }

    render() {
        return (
            <div>
                Class Component: <input type="text" ref={this.anything}
                                        onChange={this.handleChange}/>
                <TextField variant={"outlined"} inputRef={this.myInput}></TextField>
            </div>
        );
    }
}

export const RefHook = () => {
    const anything = useRef();
    const inputField = useRef();
    let init = {sayings: ""};
    const [state, setState] = useState(init);

    function handleChange(e) {
        setState({sayings: anything.current.value});
    }

    useEffect(() => {
        console.log(state?.sayings);
        inputField.current.value = state?.sayings;
    }, [state.sayings]);
    return (
        <div>
            functional Component: <input type="text" ref={anything}
                                         onChange={handleChange}/>
            <TextField variant={"outlined"} inputRef={inputField}></TextField>
        </div>
    );
};

