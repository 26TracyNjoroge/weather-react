import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main className="Main">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="weather-app-city">
            Nairobi
          </h1>
          <p className="weather-app-details">
            <span id="weather-date">Tuesday 22:38</span>,{" "}
            <span id="weather-description">broken clouds</span> <br />
            Humidity: 68% <strong id="humidity"></strong>, Wind: 5.14km/h{" "}
            <strong id="wind-speed"></strong>
          </p>
        </div>
        <div className="weather-app-temperature">
          <div id="icon">⛅</div>
          <div className="temp">
            <div
              className="weather-temperature-value"
              id="weather-temperature-value"
            >
              21
            </div>
            <div className="weather-temperature-unit">°C</div>
          </div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </main>
  );
}
