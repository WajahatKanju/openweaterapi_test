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
      console.log(weatherData)
  }, [markerPosition]);

  return (
    <div className="app-container">
      <h1>Hello Weather</h1>
      {weatherData && (
        <>
          <div>
            <p>
              Location: {weatherData.name}
              <sup>**Location Names may not be accurate 100%(Due To API Limitations)</sup>
            </p>
          </div>

          <p>Latitude: {weatherData.coord.lat}</p>
          <p>Longitude: {weatherData.coord.lon}</p>
        </>
      )}
      <Map
        markerPosition={markerPosition}
        setMarkerPosition={setMarkerPosition}
      />
    </div>
  );
}

export default App;
