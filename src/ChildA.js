import React from "react";
import ChildB from "./ChildB";
function ChildA(props) {
  return (
    <>
      <ChildB name={props.name} />
    </>
  );
}

export default ChildA;
