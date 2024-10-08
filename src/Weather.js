import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="Search"
          placeholder="Enter a City..."
          className="form-control"
        />
        <input type="Submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 12:07</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-9">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Mostly Sunny"
          />
          14°C|°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
