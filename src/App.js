import "./App.css";
import { React } from "react";
import ChildA from "./ChildA";

function App() {
  //prop drilling transferring data from Parent component(App.js) to
  //Child Component (Child C)
  const name = "Test1";
  return (
    <>
      <ChildA name={name} />
    </>
  );
}

export default App;
