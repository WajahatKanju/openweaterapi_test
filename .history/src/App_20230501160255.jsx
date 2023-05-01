import { useEffect } from "react"
import { getCurrentWeaterData } from "./api"

function App() {

  useEffect( ()=> {
    getCurrentWeaterData
  }, [])

  return (
    <>
    <h1>Hello Weather</h1>
    </>
  )
}

export default App
