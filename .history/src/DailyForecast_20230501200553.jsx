import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

function DailyForecast({ markerPosition }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}forecast/daily?lat=${markerPosition[0]}&lon=${markerPosition[1]}&cnt=7&appid=${API_KEY}`
      )
      .then((res) => {
        setForecastData(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      });
  }, [markerPosition]);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="daily-forecast-container">
      <h2>Daily Forecast</h2>
      <div className="daily-forecast-cards">
        {forecastData.list.map((forecast) => (
          <div className="daily-forecast-card" key={forecast.dt}>
            <div>{new Date(forecast.dt * 1000).toLocaleDateString()}</div>
            <div>{forecast.weather[0].description}</div>
            <div>High: {forecast.temp.max}&deg;F</div>
            <div>Low: {forecast.temp.min}&deg;F</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
