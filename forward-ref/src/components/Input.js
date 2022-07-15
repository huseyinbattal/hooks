import React, { forwardRef } from "react";

function Input({ type, onKeyDown, placeholder }, ref) {
  return <input  ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />;
}

const forwardInput = forwardRef(Input);

export default forwardInput;