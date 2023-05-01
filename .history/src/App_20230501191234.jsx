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
      <Header weatherData={weatherData} />
      <div className="content">
        <MapContainer
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
        />
        <WeatherContainer weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
