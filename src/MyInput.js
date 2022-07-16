import React, { forwardRef, useImperativeHandle, useState } from "react";

const MyInput = forwardRef(function (props, ref) {
   
  const [color, setColor] = useState("purple");

  useImperativeHandle(ref, () => ({
    sayHello,
    changeBlue,
    changeRed,
  }));
  function sayHello() {
      alert("Hello");
      
  }

  const changeBlue = () => {
      setColor("blue");
    
  };

  const changeRed = () => {
      setColor("red");
  };

  return <input type="text" style={{ color }} />;
});

export default MyInput;
