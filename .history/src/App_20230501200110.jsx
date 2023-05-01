import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";
import "./App.css";
import Header from "./Header";
import MapContainer from "./MapContainer";
import WeatherContainer from "./WeatherContainer";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [markerPosition, setMarkerPosition] = useState([34.796871, 72.346043]);
  const [dailyForecastData, setDailyForecastData] = useState(null);
  const [hourlyForecastData, setHourlyForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [weatherRes, dailyForecastRes, hourlyForecastRes] = await Promise.all([
          axios.get(`${API_BASE_URL}weather?lat=${markerPosition[0]}&lon=${markerPosition[1]}&appid=${API_KEY}`),
          axios.get(`${API_BASE_URL}forecast/daily?lat=${markerPosition[0]}&lon=${markerPosition[1]}&cnt=16&appid=${API_KEY}`),
          axios.get(`${API_BASE_URL}forecast/hourly?lat=${markerPosition[0]}&lon=${markerPosition[1]}&appid=${API_KEY}`)
        ]);
        setWeatherData(weatherRes.data);
        setDailyForecastData(dailyForecastRes.data);
        setHourlyForecastData(hourlyForecastRes.data);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch weather data");
      }
    };
    fetchData();
  }, [markerPosition]);

  return (
    <div className="app-container">
      {weatherData && <Header weatherData={weatherData} />}
      <div className="content">
        <MapContainer
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
        />
        {weatherData && (
          <>
            <WeatherContainer weatherData={weatherData} />
            <DailyForecast dailyForecastData={dailyForecastData} />
            <HourlyForecast hourlyForecastData={hourlyForecastData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
