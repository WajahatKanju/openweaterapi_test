import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_API_ENDPOINTS = {
  current: 'https://api.openweathermap.org/data/2.5/weather',
  daily: 'https://api.openweathermap.org/data/2.5/forecast/daily',
  hourly: 'https://pro.openweathermap.org/data/2.5/forecast/hourly',
};

const WeatherContainer = ({ weatherData, endpoint }) => {
  const [weather, setWeather] = useState(weatherData);

  useEffect(() => {
    const apiUrl = `${WEATHER_API_ENDPOINTS[endpoint]}?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${API_KEY}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      });
  }, [weatherData, endpoint]);

  if (!weather) {
    return null; // Return null if weather is null
  }

  console.log(weather);
  return (
    <div className="weather-container">
      <p className="temperature">
        {Math.round(weather.main.temp - 273.15)}&deg;C
      </p>
      <div className="weather-info">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt={`${weather.weather[0].icon}`}
        />
        <div className="description">
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
      <div className="details">
        <div>
          <i className="fas fa-temperature-low"></i>
          <span>
            Min: {Math.round(weather.main.temp_min - 273.15)}&deg;C
          </span>
        </div>
        <div>
          <i className="fas fa-temperature-high"></i>
          <span>
            Max: {Math.round(weather.main.temp_max - 273.15)}&deg;C
          </span>
        </div>
        <div>
          <i className="fas fa-wind"></i>
          <span>Wind: {weather.wind.speed} m/s</span>
        </div>
        <div>
          <i className="fas fa-tint"></i>
          <span>Humidity: {weather.main.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

WeatherContainer.propTypes = {
  weatherData: PropTypes.shape({
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  endpoint: PropTypes.oneOf(['current', 'daily', 'hourly']).isRequired,
};

export default WeatherContainer;
