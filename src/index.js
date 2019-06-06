import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return (
    <div>
      <Hello />
      <World />
    </div>
  );
}

function Hello() {
  return <div>Hello</div>;
}

function World() {
  return <div>World</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
