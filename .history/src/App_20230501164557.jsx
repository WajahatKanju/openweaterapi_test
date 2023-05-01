import { useEffect, useState } from "react";
import Map from "./map/map";

function App() {
  const [weatherData, setWeatherData] = useState(null);

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