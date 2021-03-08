import React from "react";
import "./Result.css";

const Result = (props) => {
  const { err, city, date, sunrise, sunset, temp, wind, pressure } = props.weather;

  let content = null;

  const sunriseTime = new Date(sunrise * 1000).toLocaleString();
  const sunsetTime = new Date(sunset * 1000).toLocaleString();

  if (!err && city) {
    content = (
      <>
        <h4>Wyniki wyszukiwania dla {city}</h4>
        <h5>Dane z dnia i godziny: {date}</h5>
        <h5>Aktualna temperatura: {temp} &#176;C</h5>
        <h5>Wschód słońca: {sunriseTime}</h5>
        <h5>Zachód słońca: {sunsetTime}</h5>
        <h5>Aktualna siła wiatru: {wind} m/s</h5>
        <h5>Aktualna cińsnienie: {pressure} hPa</h5>
      </>
    );
  }

  return <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>;
};

export default Result;
