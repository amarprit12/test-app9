import "./App.css";
import { React, useState } from "react";

import { useRef } from "react";

function App() {
  const refElement = useRef();
  console.log("refElement: ", refElement);
  const [name, setName] = useState("Test1");

  function resetValue() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "test2";
  }

  return (
    <>
      <h1>Learning useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={resetValue}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
}

export default App;
