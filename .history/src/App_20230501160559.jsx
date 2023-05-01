import { useEffect } from "react"
import { getCurrentWeaterData } from "./api"

function App() {

  useEffect( ()=> {
    const weatherData = getCurrentWeaterData();
    console.log(weatherData)
  }, [])

  return (
    <>
    <h1>Hello Weather</h1>
    </>
  )
}

export default App
