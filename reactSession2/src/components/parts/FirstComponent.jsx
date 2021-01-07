import {Component} from 'react';
import Button from "@material-ui/core/Button";

class FirstComponent extends Component {
    constructor(props) {
        super(props);
        this.clickedHandler = this.clickedHandler.bind(this);
        console.log("this.props.children: ",this.props.children);
    }

    clickedHandler(event) {
        console.log(event.target, this.props, this.state);
    }

    render() {
        return (
            <div>
                FirstComponent<Button variant="contained" onClick={this.clickedHandler}> click me</Button>
            </div>
        );
    }
}

export default FirstComponent;