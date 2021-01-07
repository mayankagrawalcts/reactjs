import Button from "@material-ui/core/Button";

const SecondComponent = (props) => {
    function clickedHandler(event) {
        console.log(event.target, props);
    }

    return (
        <div>
            SecondComponent<Button variant="contained" onClick={clickedHandler}> click me</Button>
        </div>
    );
};

export default SecondComponent;
