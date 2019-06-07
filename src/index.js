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

function ValidIndicator() {
  var isValid = false;
  return (
    <span>{isValid ? 'valid' : 'not valid'}</span>
  );
}

function ValidIndicatorTwo() {
  var isValid = true;
  return (
    <span>
      {
        // hi

        isValid && 'valid'
        // testing
      }
      {!isValid && 'not valid'
        /*
          world
        */
      }
      {
        // this is a comment
      }
    </span>
  );
}


//ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
ReactDOM.render(<ValidIndicatorTwo />, document.querySelector("#root"));

