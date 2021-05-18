import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Washington DC",
    temperature: 13,
    date: "Monday ",
    time: "10:30",
    description: "Clear",
    img: "src/icons/01d.png",
    humidity: 57,
    wind: 5
  };
  return (
    <div className="Weather">
      <div className="weather-side">
        <div className="weather-gradient"></div>

        <div className="date-container">
          <h1 className="Day" id="date">
            {weatherData.date}
          </h1>
          <p className="Hour" id="time">
            {weatherData.time}
          </p>

          <div className="col-6">
            <form className="city-name" id="search-form">
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                autofocus="on"
                className="search-form"
                id="search-text-input"
              />
              <button className="search-loop">
                <i className="fas fa-search"></i>
              </button>
            </form>
            <div className="weather-icon">
              <img src={weatherData.img} alt="" id="icon" />

              <span className="location" id="city">
                {weatherData.city}
              </span>
              <h2 className="weather-des" id="description">
                {weatherData.description}
              </h2>
              <span className="weather-temp" id="temperature">
                {weatherData.temperature}
              </span>
              <span className="weather-deg">
                <a href="/" id="fahrenheit-link" class="active">
                  °F
                </a>{" "}
                |
                <a href="/" id="celsius-link" class="active">
                  °C
                </a>
              </span>
              <span className="weather-deg"></span>

              <div className="row">
                <div className="col-m-6">
                  <ul class="percentage-speed">
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                  <div className="weather-forecast" id="forecast"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small className="link-code">
        <a
          href="https://github.com/StephanieR20/Weather-App.git"
          target="-blank"
        >
          Open-Source Code{" "}
        </a>
        , <strong> Stephanie Rubio </strong>
      </small>
    </div>
  );
}
