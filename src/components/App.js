// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Form from "./Form";
import Result from "./Result";

const API_KEY = "6387844d05f462f41443055dc597e211";

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
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`;

    fetch(API)
      .then((response) => {
        console.log(API);
        if (response.ok) {
          console.log(response.status);
          return response.json();
        }
        console.log(response.status);
        throw Error("try one more time!");
      })
      .then((data) => {
        const date = new Date().toLocaleString();

        console.log(data);

        const {
          sys: { sunrise },
          sys: { sunset },
          main: { temp },
          wind: { speed: wind },
          main: { pressure },
        } = data;

        this.setState((prevState) => ({
          err: false,
          date,
          city: prevState.value,
          sunrise,
          sunset,
          temp,
          wind,
          pressure,
        }));
      })
      .catch((error) => {
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className="app">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} error={this.state.err} />
      </div>
    );
  }
}

export default App;
