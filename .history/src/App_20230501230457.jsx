import { useState, createContext } from "react";
import API_KEY from "../config";
import "./App.css";
import MapContainer from "./MapContainer";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const APIContext = createContext();

function App() {
  const [markerPosition, setMarkerPosition] = useState([34.796871, 72.346043]);
  const [selectedEndpoint, setSelectedEndpoint] = useState("current");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleEndpointSelect = (endpoint) => {
    setSelectedEndpoint(endpoint);
  };

  let endpointComponent;

  if (selectedEndpoint === "daily") {
    endpointComponent = <DailyForecast markerPosition={markerPosition} />;
  } else if (selectedEndpoint === "hourly") {
    endpointComponent = <HourlyForecast markerPosition={markerPosition} />;
  } else {
    endpointComponent = <CurrentWeather markerPosition={markerPosition} />;
  }
console.log(markerPosition)
  const APIData = {
      'API_KEY': API_KEY,
      'API_BASE_URL': API_BASE_URL,
      'lat': markerPosition[0],
      'lng': markerPosition[1],
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app-container ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="content">
        <MapContainer
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
          className='map-container'
        />
        <div className="endpoint-buttons">
          <button onClick={() => handleEndpointSelect("current")}>
            Current Weather
          </button>
          <button onClick={() => handleEndpointSelect("daily")}>
            Daily Forecast
          </button>
          <button onClick={() => handleEndpointSelect("hourly")}>
            Hourly Forecast
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </button>
        </div>
        <APIContext.Provider value={APIData}>{endpointComponent}</APIContext.Provider>
      </div>
    </div>
  );
}

export default App;
