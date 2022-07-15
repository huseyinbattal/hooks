import React, { useImperativeHandle, forwardRef, useState } from "react";

const TextInput = forwardRef((props, ref) => {
  const [text, setText] = useState("");

  const onValidate = () => {
    if (text === "yasin") {
      alert("Hatalı Veri!!!");
    }
  };

  useImperativeHandle(ref, () => ({ onValidate }));

  return (
    <div>
      <input
        ref={ref}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
});

export default TextInput;
