import { useEffect, useState } from "react";
import { getCurrentWeaterData } from "./api";
import Map from "./map/map";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getCurrentWeaterData()
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Hello Weather</h1>
      {weatherData && <Map weatherData={weatherData} />}
    </>
  );
}

export default App;