import {TextField} from '@material-ui/core';

export default function Input(props) {

    const {name,variant, label, value, error = null, onChange, ...other} = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label || name}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error: true, helperText: error})}
        />
    )
}