// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={"app"}>
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
