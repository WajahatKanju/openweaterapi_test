import { useEffect } from "react"
import { getCurrentWeaterData } from "./api"
import { Map } from "./map/leafmap";

function App() {

  useEffect( ()=> {
    const weatherData = getCurrentWeaterData();
    console.log(weatherData)
  }, [])

  return (
    <>
    <h1>Hello Weather</h1>
    <Map />
    </>
  )
}

export default App
