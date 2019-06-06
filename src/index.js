import React from 'react';
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
  return (<>
    <td>First Name</td>
    <td>Last Name</td>
  </>);
}

function SubmitButton() {
  var buttonLabel = "Submit";
  return (
    <button>{buttonLabel}</button>
  );
}


//ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
ReactDOM.render(<SubmitButton />, document.querySelector("#root"));
