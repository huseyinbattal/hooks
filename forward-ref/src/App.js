import React, { useEffect, useRef } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastKeyDown(e) {

    if (e.key === "Enter") {
      submitRef.current.focus();
    }

  }

  function submitKeyDown() {
    alert("form submitted!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input
          onKeyDown={firstKeyDown}
          ref={firstNameRef}
          type="text"
          placeholder="Enter first name..."
        />
        <Input
          onKeyDown={lastKeyDown}
          ref={lastNameRef}
          type="text"
          placeholder="Enter last name..."
        />
        <button onKeyDown={submitKeyDown} ref={submitRef}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
