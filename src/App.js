import { useState, useMemo } from "react";
import CustomText from "./CustomText";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("yasin");
  const memoData = useMemo(() => {
    return data;
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <div>UseMemo</div>
        <button
          onClick={() => {
            setData("Ahmet");
          }}
        >
          İsim Değiştir
        </button>

        <div>State Data: {data}</div>

        <div>memoData: {memoData}</div>

        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <CustomText />
      </header>
    </div>
  );
}

export default App;
