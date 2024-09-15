import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    //const response = fetch("/api/users").then((r)=>r.json())
    //const response = await axios.get("127.0.0.1:5555/api/users")
    const response = await axios.get("/api/users")
    console.log(response)
    console.log(response.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  

  return (
    <>
    <h1>API TESTING</h1>
    </>
  )
}

export default App
