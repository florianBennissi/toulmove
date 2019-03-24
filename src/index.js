import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/index.css";
import Routes from "./routes";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
