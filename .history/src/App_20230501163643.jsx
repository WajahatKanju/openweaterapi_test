import { useEffect } from "react"
import { getCurrentWeaterData } from "./api"
import Map  from "./map/map";

function App() {

  useEffect( ()=> {
    const weatherData = getCurrentWeaterData();
    console.log(weatherData)
  }, [])

  return (
    <>
    <h1>Hello Weather</h1>
    {/* resposne data i want to use it here */}
    <Map />
    </>
  )
}

export default App
