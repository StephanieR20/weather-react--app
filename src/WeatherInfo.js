import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){

    return(

        <div className="date-container">
          <h1 className="Day" id="date">
            < FormattedDate date={props.data.date}/>
          </h1>
          <p className="Hour" id="time">
           < FormattedTime time= {props.data.time}/>
          </p>
    <div className="weather-icon">
      < WeatherIcon code={props.data.icon} size={52}/>
       <span className="location" id="city">{props.data.city} </span>
       <h2 className="weather-des" id="description">{props.data.description}</h2>
              <span className="weather-temp" id="temperature">
                <WeatherTemperature celsius={props.data.temperature}/>
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
                      <span id="humidity">{props.data.humidity}%</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{props.data.wind}</span> km/h
                    </li>
                  </ul>
                   </div>
                   </div>
                 </div>
                 </div>
    );
}