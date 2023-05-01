import { useState, useEffect, useContext } from "react";
import { APIContext } from "./App";
import axios from "axios";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { API_BASE_URL, API_KEY, lat, lng } = useContext(APIContext);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      });
  }, [lat, lng]);

  return (
    <>
      {weatherData && (
        <div className="weather-container">
          <p className="temperature">
            {Math.round(weatherData.main.temp - 273.15)}&deg;C
          </p>
          <div className="weather-info">
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={`${weatherData.weather[0].icon}`}
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
      )}
    </>
  );
};


export default CurrentWeather;
