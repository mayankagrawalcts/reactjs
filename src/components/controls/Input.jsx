import {TextField} from '@material-ui/core';

export default function Input(props) {

    const {name, variant, label, value, helperText = null, onChange, ...other} = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label || name}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(helperText && {error: true, helperText: helperText})}
        />
    )
}