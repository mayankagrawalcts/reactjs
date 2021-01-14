import {useReducer} from "react";
import {Button, FormLabel} from "@material-ui/core";

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, quantity: Number(state.quantity) + 1
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state, quantity: Number(state.quantity) - 1
            };
        case 'RESET_CART':
            return {
                ...state, quantity: 0
            };
        default:
            return state;
    }
}

const UseReducerHook = () => {
    let initState = {quantity: 0};
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div><FormLabel>{state.quantity}</FormLabel>
            <Button variant={"contained"} onClick={() => dispatch({type: "ADD_TO_CART"})}>
                Add!
            </Button>
            <Button variant={"contained"} onClick={() => dispatch({type: "REMOVE_FROM_CART"})}>
                Remove!
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant={"contained"} onClick={() => dispatch({type: "RESET_CART"})}>
                Reset!
            </Button><br/>
            <Button variant={"contained"} onClick={() => dispatch({type: "Update_CART"})}>
                UpdateCart!
            </Button>
        </div>
    );
};

export default UseReducerHook;


