// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    err: "",
  };

  handleInputChange = (event) => {
    return this.setState(() => ({
      value: event.target.value,
    }));
  };

  handleCitySubmit = (event) => {
    event.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=6387844d05f462f41443055dc597e211&units=metric`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("try one more time!");
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err.status));
  };

  render() {
    return (
      <div className={"app"}>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
