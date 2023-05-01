import { useEffect } from "react"
import { getCurrentWeaterData } from "./api"
import Map  from "./map/leafmap";

function App() {

  useEffect( ()=> {
    const weatherData = getCurrentWeaterData();
    console.log(weatherData)
  }, [])

  return (
    <>
    <h1>Hello Weather</h1>
    <div id="mapContainer" style={{ height: '800px'}}>
      
    <Map />
    </div>
    </>
  )
}

export default App
