import { useEffect, useState } from "react";
import Map from "./map/map";
import axios from "axios";
import API_KEY from "../config";
import "./App.css";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [markerPosition, setMarkerPosition] = useState([34.796871, 72.346043]);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}weather?lat=${markerPosition[0]}&lon=${markerPosition[1]}&appid=${API_KEY}`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      });
    console.log(weatherData);
  }, [markerPosition]);

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Hello User</h1>
        {weatherData && (
          <div className="location">
            <p>
              <i className="fas fa-map-marker-alt"></i> {weatherData.name},{" "}
              {weatherData.sys.country}
            </p>
          </div>
        )}
      </div>

      <div className="content">
        <div className="map-container">
          <Map
            markerPosition={markerPosition}
            setMarkerPosition={setMarkerPosition}
          />
        </div>
        {weatherData && (
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
                <span>Min: {Math.round(weatherData.main.temp_min - 273.15)}&deg;C</span>
              </div>
              <div>
                <i className="fas fa-temperature-high"></i>
                <span>Max: {Math.round(weatherData.main.temp_max - 273.15)}&deg;C</span>
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
      </div>
    </div>
  );
}

export default App;
