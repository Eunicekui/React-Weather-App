import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData]= useState({ ready: false});

    function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt*1000),
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6 d-flex">
          <img
            src={weatherData.iconUrl}
            alt="Mostly Sunny"
          />
          <div className="temperature">{Math.round(weatherData.temperature)}</div>
          <div className="unit">°C|°F</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
else {
 const apiKey = "1266ad07b66517497b1acf79ea5a6a64";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);


 return "Loading...";
}
}
