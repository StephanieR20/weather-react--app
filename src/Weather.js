import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";


import "./App.css";



export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});
   const [city, setCity] = useState(props.defaultCity);
  
   function handleResponse(response){
      setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      time: new Date(response.data.dt * 1000),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

     function handleSubmit(event) {
    event.preventDefault();
    search();
  }


     function handleCityChange(event) {
    setCity(event.target.value);
  }

    
     function search(){
  const apiKey= "e63c22e6b2d05b10dc5b93e36740e210";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

     }

 if (weatherData.ready){
return (
    <div className="Weather">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="row row-cols-auto" ></div>
        <div className="col">
            <form className="city-name" id="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                autofocus="on"
                className="search-form"
                id="search-text-input"
                onChange={handleCityChange}
              />
            <button className="search-loop">
                <i className="fas fa-search"></i>
              </button>
            </form> 
          < WeatherInfo data={weatherData}/>
        < WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        </div>
        </div>
        
          ); 
  }else{
   search();
  return "Loading....";
} 

}