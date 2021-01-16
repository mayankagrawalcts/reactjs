import React, { forwardRef } from "react";

const Input = (props, ref) => <input ref={ref} type="text" {...props} />;
export default forwardRef(Input);
