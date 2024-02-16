import "./App.css";
import { React, useState, useRef } from "react";

function App() {
  const refElement = useRef("");
  console.log("refElement: ", refElement);
  const [name, setName] = useState("test1");
  function resetValue() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "hey";
  }
  return (
    <>
      <h1>Learning useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={resetValue}>Reset</button>
      <button onClick={handleInput}>Handle input</button>
    </>
  );
}

export default App;
