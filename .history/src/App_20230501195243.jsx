import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";
import "./App.css";
import Header from "./Header";
import MapContainer from "./MapContainer";
import WeatherContainer from "./WeatherContainer";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [markerPosition, setMarkerPosition] = useState([34.796871, 72.346043]);
  const [activeTab, setActiveTab] = useState("current");

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
  }, [markerPosition]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      {weatherData && <Header weatherData={weatherData} />}
      <div className="content">
        <MapContainer
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
        />
        <div className="tabs">
          <button
            className={activeTab === "current" ? "active" : ""}
            onClick={() => handleTabClick("current")}
          >
            Current
          </button>
          <button
            className={activeTab === "forecast" ? "active" : ""}
            onClick={() => handleTabClick("forecast")}
          >
            Forecast
          </button>
          <button
            className={activeTab === "hourly" ? "active" : ""}
            onClick={() => handleTabClick("hourly")}
          >
            Hourly
          </button>
        </div>
        {weatherData && (
          <>
            {activeTab === "current" && (
              <WeatherContainer weatherData={weatherData} endpoint="current" />
            )}
            {activeTab === "forecast" && (
              <WeatherContainer
                weatherData={weatherData}
                endpoint="forecast/daily"
                cnt={16}
              />
            )}
            {activeTab === "hourly" && (
              <WeatherContainer
                weatherData={weatherData}
                endpoint="forecast/hourly"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
