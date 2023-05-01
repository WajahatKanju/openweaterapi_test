import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";

function DailyForecast({ lat, lon }) {
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}?lat=${lat}&lon=${lon}&cnt=16&appid=${API_KEY}`)
      .then((res) => {
        setDailyData(res.data);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to fetch daily weather forecast data");
      });
  }, [lat, lon]);

  return (
    <div>
      {dailyData && (
        <div>
          <h2>Daily Forecast</h2>
          {/* Display the daily forecast data here */}
        </div>
      )}
    </div>
  );
}

export default DailyForecast;
