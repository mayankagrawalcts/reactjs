import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {Component} from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        let validation={};
        this.state = {username: "", password: "", authflag: 1,validation};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.state.username, password: event.state.password});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
            this.props.history.push("/home");
        } else {
            alert('Incorrect Credntials!');
        }
    }

    render() {
        return (
            <div>
                <Grid container >
                    <Grid container direction="column" justify="center" spacing={2}>
                        <Grid item>
                            <Typography component="h1" variant="h5">Sign in</Typography>
                        </Grid>
                        <Grid item>
                            <form onSubmit={this.handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField type="email" placeholder="Email" name="username"
                                                   variant="outlined"
                                                   helperText={this.state.validation.email? "please enter email":null}
                                                   value={this.state.username}
                                                   onChange={(event) => this.setState({[event.target.name]: event.target.value,})}
                                                   required autoFocus/></Grid>
                                    <Grid item>
                                        <TextField type="password"
                                                   placeholder="Password" name="password" variant="outlined"
                                                   value={this.state.password}
                                                   helperText={"please enter password"}
                                                   onChange={(event) => this.setState({[event.target.name]: event.target.value,})}
                                                   required/>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary"
                                                type="submit"
                                                className="button-block">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid></Grid>
            </div>
        )
    };
}

export default Login;