import { useEffect, useState } from "react";
import { getCurrentWeaterData } from "./api";
import Map from "./map/map";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getCurrentWeaterData()
      .then((data) => setWeatherData(data.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(weatherData)

  return (
    <>
      <h1>Hello Weather</h1>
      <h2>Location: {weatherData.data}</h2>
      <Map />
    </>
  );
}

export default App;