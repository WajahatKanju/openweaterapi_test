import { useEffect, useState } from "react";
import Map from "./map/map";
import axios from "axios";
import API_KEY from "../config";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";


function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect((lat = 34.796871, lng = 72.346043) => {
    axios
      .get(`${API_BASE_URL}weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      });
    console.log(weatherData)
    } , [])
  return (
    <>
      <h1>Hello Weather</h1>
      <h2>Location:</h2>
      {weatherData && (
        <>
          <p>Latitude: {weatherData.coord.lat}</p>
          <p>Longitude: {weatherData.coord.lon}</p>
        </>
      )}
      <Map />
    </>
  );
}

export default App;
