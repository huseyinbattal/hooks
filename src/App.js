import React, { useState } from "react";
import "./App.css"
import Text from "./Text"



const App = () => {
  const [dark, setDark] = useState(false);


  const theme = {
    backgroundColor: dark ? "black" : "#f0ffff",
    color: dark ? "#f0ffff" : "dodgerblue",
  
  }
  return (
    <div  className="App" style={theme}>
     <Text/>
      <br/>
      <button className="darkBtn" onClick={() => {
        setDark(dark=>!dark)
      }}>Toogle</button>
    </div>
  );
};

export default App;