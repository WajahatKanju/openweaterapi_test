import React from "react";

const WeatherContainer = ({ weatherData }) => {
  if (!weatherData) {
    return null; // Return null if weatherData is null
  }

  return (
    <div className="weather-container">
      <p className="temperature">
        {Math.round(weatherData.main.temp - 273.15)}&deg;C
      </p>
      <div className="weather-info">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt=""
        />
        <div className="description">
          <p>{weatherData.weather[0].main}</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      </div>
      <div className="details">
        <div>
          <i className="fas fa-temperature-low"></i>
          <span>
            Min: {Math.round(weatherData.main.temp_min - 273.15)}&deg;C
          </span>
        </div>
        <div>
          <i className="fas fa-temperature-high"></i>
          <span>
            Max: {Math.round(weatherData.main.temp_max - 273.15)}&deg;C
          </span>
        </div>
        <div>
          <i className="fas fa-wind"></i>
          <span>Wind: {weatherData.wind.speed} m/s</span>
        </div>
        <div>
          <i className="fas fa-tint"></i>
          <span>Humidity: {weatherData.main.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
