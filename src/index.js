import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return [
    <Hello />, <World />
  ];
}

function Hello() {
  return <span>Hello </span>;
}

function World() {
  return <span>World!</span>;
}

function NameCells() {
  return (<React.Fragment>
    <td>First Name</td> <td>Last Name</td>
  </React.Fragment>);
}



//ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
ReactDOM.render(<NameCells />, document.querySelector("#root"));
