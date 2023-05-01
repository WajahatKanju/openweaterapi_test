import { useEffect } from "react"

function App() {

  useEffect( ()=> {
    console.log('Hello World!')
  }, [])

  return (
    <>
    <h1>Hello Weather</h1>
    </>
  )
}

export default App
