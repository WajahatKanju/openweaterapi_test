import { useState, useContext, createContext } from "react";
import API_KEY from "../config";
import "./App.css";
import Header from "./Header";
import MapContainer from "./MapContainer";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [markerPosition, setMarkerPosition] = useState([34.796871, 72.346043]);
  const [selectedEndpoint, setSelectedEndpoint] = useState("current");


  const handleEndpointSelect = (endpoint) => {
    setSelectedEndpoint(endpoint);
  };

  let endpointComponent;
  
  if (selectedEndpoint === "daily") {
    endpointComponent = <DailyForecast markerPosition={markerPosition} />;
  } else if (selectedEndpoint === "hourly") {
    endpointComponent = <HourlyForecast markerPosition={markerPosition} />;
  } else {
    endpointComponent = (
      
      <CurrentWeather markerPosition={markerPosition} />
    );
  }

  return (
    <div className="app-container">
      {weatherData && <Header weatherData={weatherData} />}
      <div className="content">
        <MapContainer
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
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
        </div>
        {endpointComponent}
      </div>
    </div>
  );
}

export default App;
