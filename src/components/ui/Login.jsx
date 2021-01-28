import {
    Avatar,
    Button,
    Container,
    CssBaseline,
    Link,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {useForm} from "../hooks/useForm";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = (props) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(6),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:"center"
          },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            // justifyItems: "center",
            // display: "grid"
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:"center"
        },
        // submit: {
        //     margin: theme.spacing(0, 0, 2, 2),
        // },
    }));
    const initialFValues = {username: "", password: "", authflag: 1};
    const validate = (fieldValues) => {
        let temp = {...errors}
        if ('username' in fieldValues)
            temp.username = fieldValues.username ? "" : "Username is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "Password is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        if (validate(values)) {
            if (values.username == 'admin@littech.in' && values.password == 'secret') {
                console.log("login success");
                props.history.push("/welcome");
            } else {
                alert('Incorrect Credntials!');
            }
        }
    }
    const classes = useStyles();
    return (
        <>
            <Container>
                <CssBaseline/>
                <div className={classes.paper}>
                    {/*<Avatar className={classes.avatar}>*/}
                    {/*    <LockOutlinedIcon/>*/}
                    {/*</Avatar>*/}
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField type="username" placeholder="Username" name="username"
                                   variant="outlined" label={"Username"}
                                   value={values.username}
                                   onChange={handleInputChange}
                                   margin={"normal"}
                                   error={errors.username ? true : false}
                                   helperText={errors.username || null}
                                   required autoFocus/>
                        <TextField type="password"
                                   placeholder="Password" name="password"
                                   margin={"normal"}
                                   variant="outlined"
                                   label={"Password"}
                                   value={values.password}
                                   onChange={handleInputChange}
                                   error={errors.password ? true : false}
                                   helperText={errors.password || null}
                                   required/><br/>
                        <Button variant="contained" color="primary"
                                onClick={handleSubmit}
                                className={classes.submit}>Submit</Button>
                        <br/>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </form>
                </div>
            </Container></>
    )
};

export default Login;