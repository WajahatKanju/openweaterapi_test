import { useEffect, useState } from "react";
import Map from "./map/map";
import axios from "axios";
import API_KEY from "../config";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [lat, setLat] = useState(34.796871);
  const [lng, setLng] = useState(72.346043);
  const [weatherData, setWeatherData] = useState(null);

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

  const handleMapChange = (newLat, newLng) => {
    setLat(newLat);
    setLng(newLng);
  };

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
      <Map lat={lat} lng={lng} onMapChange={handleMapChange} />
    </>
  );
}

export default App;
