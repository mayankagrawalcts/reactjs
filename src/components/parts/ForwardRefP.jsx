import React, {useEffect, useRef} from "react";
import Input from "./ForwardRefT";

function ForwardRefP() {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.value="test";
        }

        console.log({inputRef});
    }, []);

    return (
        <div>
            <Input ref={inputRef}/>
        </div>
    );
}

export default ForwardRefP;
