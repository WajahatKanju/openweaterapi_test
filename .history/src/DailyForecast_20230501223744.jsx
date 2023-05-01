import { useState, useEffect, useContext } from "react";
import { APIContext } from "./App";
import axios from "axios";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { API_BASE_URL, API_KEY, lat, lng } = useContext(APIContext);
  useEffect(() => {
    axios
    .get(`${API_BASE_URL}?lat=${lat}&lon=${lng}&cnt=16&appid=${API_KEY}`)
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

    </>
  );
};


export default CurrentWeather;
