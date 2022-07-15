import React, { forwardRef } from "react";

const FancyButton = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        console.log(ref.current.innerText);
      }}
      ref={ref}
    >
      {props.children}
    </button>
  );
});

export default FancyButton;
