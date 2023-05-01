import { useState, useEffect, useContext } from "react";
import { APIContext } from "./App";
import axios from "axios";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { API_BASE_URL, API_KEY, lat, lng } = useContext(APIContext);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}forecast/daily?lat=${lat}&lon=${lng}&cnt=16&appid=${API_KEY}`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      });
  }, [lat, lng]);

  if (!weatherData) {
    return (
      <div style={{ color: "red" }}>
        Unable to retrieve current weather data. It seems that the API call
        limit has been exceeded or the Daily Weather Forcast is not included in the
        free API plan.
      </div>
    );
  }

  const city = weatherData.city.name;
  const temp = weatherData.list[0].temp.day;
  const weatherDescription = weatherData.list[0].weather[0].description;
  const icon = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;

  return (
    <div>
      <h2>{city}</h2>
      <img src={icon} alt={weatherDescription} />
      <p>{temp} °K</p>
      <p>{weatherDescription}</p>
    </div>
  );
};

export default CurrentWeather;
